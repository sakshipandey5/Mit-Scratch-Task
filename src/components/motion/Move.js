// import React, { useState } from "react";
// import { connect } from "react-redux";
// import Paper from "@material-ui/core/Paper";

// // Move Component for Sidebar
// const Move = ({ character, comp_id }) => {
//   const [steps, setSteps] = useState(0);

//   // Function used for moiving Sprint
//   const handleClick = () => {
//     const el = document.getElementById(`${character.active}-div`);

//     var left = el.offsetLeft;
//     el.style.position = "relative";
//     el.style.left = left + steps + "px";
//   };

//   return (
//     <Paper elevation={3}>
//       <div
//         id={comp_id}
//         className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
//         onClick={() => handleClick()}
//       >
//         Move X{" "}
//         <input
//           type="number"
//           className="text-black text-center w-16 mx-2"
//           value={steps}
//           onChange={(e) => setSteps(parseInt(e.target.value))}
//         />{" "}
//         steps
//       </div>
//     </Paper>
//   );
// };

// // mapping state to component
// const mapStateToProps = (state) => {
//   return {
//     character: state.character,
//   };
// };

// export default connect(mapStateToProps)(Move);
// import React, { useState } from "react";
// import Paper from "@material-ui/core/Paper";

// // Move Component for Sidebar
// const Move = ({ comp_id, spriteId }) => {
//   const [steps, setSteps] = useState(0);

//   // Function used for moving Sprite
//   const handleClick = () => {
//   const realSpriteId = spriteId || window.__currentPlayAllSpriteId;
//   console.log("Move block spriteId:", realSpriteId);
//   const el = document.getElementById(`${realSpriteId}-div`);
//   if (!el) {
//     console.log("Element not found:", `${realSpriteId}-div`);
//     return;
//   }
//   var left = el.offsetLeft;
//   el.style.position = "relative";
//   el.style.left = left + steps + "px";
// };

//   return (
//     <Paper elevation={3}>
//       <div
//         id={comp_id}
//         className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
//         onClick={handleClick}
//       >
//         Move X{" "}
//         <input
//           type="number"
//           className="text-black text-center w-16 mx-2"
//           value={steps}
//           onChange={(e) => setSteps(parseInt(e.target.value) || 0)}
//         />{" "}
//         steps
//       </div>
//     </Paper>
//   );
// };

// export default Move;

// import React, { useState } from "react";
// import Paper from "@material-ui/core/Paper";
// import { isColliding } from "../../utils/collision";

// // Move Component for Sidebar
// const Move = ({ comp_id, spriteId }) => {
//   const [steps, setSteps] = useState(0);

//   // Function used for moving Sprite
//   const handleClick = () => {
//     const realSpriteId = spriteId || window.__currentPlayAllSpriteId;
//     console.log("Move block spriteId:", realSpriteId);
//     const el = document.getElementById(`${realSpriteId}-div`);
//     if (!el) {
//       console.log("Element not found:", `${realSpriteId}-div`);
//       return;
//     }
//     var left = el.offsetLeft;
//     el.style.position = "relative";
//     el.style.left = left + steps + "px";
//   };

//   return (
//     <Paper elevation={3}>
//       <div
//         id={comp_id}
//         className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
//         onClick={handleClick}
//       >
//         Move X{" "}
//         <input
//           type="number"
//           className="text-black text-center w-16 mx-2"
//           value={steps}
//           onChange={(e) => setSteps(parseInt(e.target.value) || 0)}
//           onClick={e => e.stopPropagation()} // <-- This line stops propagation!
//         />{" "}
//         steps
//       </div>
//     </Paper>
//   );
// };

// export default Move;


import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { isColliding } from "../../utils/collision";

// Move Component for Sidebar
const Move = ({ comp_id, spriteId }) => {
  const [steps, setSteps] = useState(0);

  // Function used for moving Sprite
  const handleClick = () => {
    const realSpriteId = spriteId || window.__currentPlayAllSpriteId;
    console.log("Move block spriteId:", realSpriteId);
    const el = document.getElementById(`${realSpriteId}-div`);
    if (!el) {
      console.log("Element not found:", `${realSpriteId}-div`);
      return;
    }
    var left = el.offsetLeft;
    el.style.position = "relative";
    el.style.left = left + steps + "px";

    // --- Collision detection and animation swap ---
    const allSprites = document.querySelectorAll('.character');
    allSprites.forEach(otherEl => {
      if (otherEl.id !== `${realSpriteId}-div`) {
        if (isColliding(el, otherEl)) {
          window.swapAnimations(realSpriteId, otherEl.id.replace('-div', ''));
        }
      }
    });
    // ---------------------------------------------
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={handleClick}
      >
        Move X{" "}
        <input
          type="number"
          className="text-black text-center w-16 mx-2"
          value={steps}
          onChange={(e) => setSteps(parseInt(e.target.value) || 0)}
          onClick={e => e.stopPropagation()}
        />{" "}
        steps
      </div>
    </Paper>
  );
};

export default Move;