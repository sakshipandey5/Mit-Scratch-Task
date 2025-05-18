// // import React, { useState } from "react";
// // import { connect } from "react-redux";
// // import { setCharacterAngle } from "../../redux/character/actions";
// // import RedoIcon from "@material-ui/icons/Redo";
// // import Paper from "@material-ui/core/Paper";

// // const TurnClockWise = ({ character, characterAngle, comp_id }) => {
// //   const [angle, setAngle] = useState(0);

// //   // handle turn clockwise component
// //   const handleClick = () => {
// //     const el = document.getElementById(character.active);
// //     const character_angle = character.characters.find(
// //       (x) => x.id === character.active
// //     );
// //     if (character_angle) {
// //       el.style.transform = `rotate(${character_angle.angle + angle}deg)`;
// //       characterAngle(character_angle.angle + angle);
// //     }
// //   };

// //   return (
// //     <Paper elevation={3}>
// //       <div className="text-center rounded bg-blue-500 p-2 my-3">
// //         <div className="grid grid-cols-2">
// //           <div className="text-white">Rotate By:</div>
// //           <input
// //             className="mx-2 p-1 py-0 text-center"
// //             type="number"
// //             value={angle}
// //             onChange={(e) => setAngle(parseInt(e.target.value))}
// //           />
// //         </div>
// //         <div
// //           id={comp_id}
// //           className={`flex bg-blue-700 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer text-center`}
// //           onClick={() => handleClick()}
// //         >
// //           <div className="flex mx-auto">
// //             Turn
// //             <RedoIcon className="mx-2" /> {angle} degrees
// //           </div>
// //         </div>
// //       </div>
// //     </Paper>
// //   );
// // };

// // // mapping state to component
// // const mapStateToProps = (state) => {
// //   return {
// //     character: state.character,
// //   };
// // };

// // // mapping function to component
// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     characterAngle: (angle) => dispatch(setCharacterAngle(angle)),
// //   };
// // };

// // export default connect(mapStateToProps, mapDispatchToProps)(TurnClockWise);
// import React, { useState } from "react";
// import RedoIcon from "@material-ui/icons/Redo";
// import Paper from "@material-ui/core/Paper";

// const TurnClockWise = ({ comp_id, spriteId }) => {
//   const [angle, setAngle] = useState(0);

//   // handle turn clockwise component
//   const handleClick = () => {
//     const el = document.getElementById(`${spriteId}-div`);
//     if (!el) return;
//     // Get current rotation from style or default to 0
//     const currentRotation = el.style.transform
//       ? parseInt(el.style.transform.replace(/[^0-9-]/g, "")) || 0
//       : 0;
//     el.style.transform = `rotate(${currentRotation + angle}deg)`;
//   };

//   return (
//     <Paper elevation={3}>
//       <div className="text-center rounded bg-blue-500 p-2 my-3">
//         <div className="grid grid-cols-2">
//           <div className="text-white">Rotate By:</div>
//           <input
//             className="mx-2 p-1 py-0 text-center"
//             type="number"
//             value={angle}
//             onChange={(e) => setAngle(parseInt(e.target.value) || 0)}
//           />
//         </div>
//         <div
//           id={comp_id}
//           className={`flex bg-blue-700 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer text-center`}
//           onClick={handleClick}
//         >
//           <div className="flex mx-auto">
//             Turn
//             <RedoIcon className="mx-2" /> {angle} degrees
//           </div>
//         </div>
//       </div>
//     </Paper>
//   );
// };

// export default TurnClockWise;


import React, { useState } from "react";
import RedoIcon from "@material-ui/icons/Redo";
import Paper from "@material-ui/core/Paper";

const TurnClockWise = ({ comp_id, spriteId }) => {
  const [angle, setAngle] = useState(0);

  // handle turn clockwise component
  const handleClick = () => {
    // Use the global spriteId if this prop is null
    const realSpriteId = spriteId || window.__currentPlayAllSpriteId;
    console.log("TurnClockWise block spriteId:", realSpriteId);
    const el = document.getElementById(`${realSpriteId}-div`);
    if (!el) {
      console.log("Element not found:", `${realSpriteId}-div`);
      return;
    }
    // Get current rotation from style or default to 0
    const currentRotation = el.style.transform
      ? parseInt(el.style.transform.replace(/[^0-9-]/g, "")) || 0
      : 0;
    el.style.transform = `rotate(${currentRotation + angle}deg)`;
  };

  return (
    <Paper elevation={3}>
      <div className="text-center rounded bg-blue-500 p-2 my-3">
        <div className="grid grid-cols-2">
          <div className="text-white">Rotate By:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value) || 0)}
            onClick={e => e.stopPropagation()} // Prevent accidental run on input click
          />
        </div>
        <div
          id={comp_id}
          className={`flex bg-blue-700 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer text-center`}
          onClick={handleClick}
        >
          <div className="flex mx-auto">
            Turn
            <RedoIcon className="mx-2" /> {angle} degrees
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default TurnClockWise;