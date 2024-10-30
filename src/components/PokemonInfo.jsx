import { useContext } from "react";
import PokemonType from "../PokemonType";
import PokemonContext from "../PokemonContext";

// TRY
// const PokemonInfo = ({ name : { english }, base }) => {
//   return (
//     <div>
//       <h1>{english}</h1>
//       <table>
//         <tbody>
//           {Object.keys(base).map((key) => (
//             <tr key={key}>
//               <td>{key}</td>
//               <td>{base[key]}</td>
//               <td></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// PokemonInfo.propTypes = PokemonType;

const PokemonInfo = () => {
  const { selectedItem } = useContext(PokemonContext);
  return selectedItem ? (
    <div>
      <h1>{selectedItem.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedItem.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{selectedItem.base[key]}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

PokemonInfo.propTypes = {
  selectedItem: PokemonType,
};

export default PokemonInfo;
