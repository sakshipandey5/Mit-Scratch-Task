// import React, { useState } from "react";
// import { connect } from "react-redux";
// import Paper from "@material-ui/core/Paper";

// // Move Component for Sidebar
// const MoveY = ({ character, comp_id }) => {
//   const [steps, setSteps] = useState(0);

//   // Function used for moiving Sprint in Y direction
//   const handleClick = () => {
//     const el = document.getElementById(`${character.active}-div`);

//     var top = el.offsetTop;
//     el.style.position = "relative";
//     el.style.top = top + steps + "px";
//   };

//   return (
//     <Paper elevation={3}>
//       <div
//         id={comp_id}
//         className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
//         onClick={() => handleClick()}
//       >
//         Move Y{" "}
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

// export default connect(mapStateToProps)(MoveY);
// import React, { useState } from "react";
// import Paper from "@material-ui/core/Paper";

// // Move Component for Sidebar
// const MoveY = ({ comp_id, spriteId }) => {
//   const [steps, setSteps] = useState(0);

//   // Function used for moving Sprite in Y direction
//   const handleClick = () => {
//     const el = document.getElementById(`${spriteId}-div`);
//     if (!el) return;
//     var top = el.offsetTop;
//     el.style.position = "relative";
//     el.style.top = top + steps + "px";
//   };

//   return (
//     <Paper elevation={3}>
//       <div
//         id={comp_id}
//         className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
//         onClick={handleClick}
//       >
//         Move Y{" "}
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

// export default MoveY;

import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";

// MoveY Component for Sidebar
const MoveY = ({ comp_id, spriteId }) => {
  const [steps, setSteps] = useState(0);

  // Function used for moving Sprite in Y direction
  const handleClick = () => {
    // Use the global spriteId if this prop is null
    const realSpriteId = spriteId || window.__currentPlayAllSpriteId;
    console.log("MoveY block spriteId:", realSpriteId);
    const el = document.getElementById(`${realSpriteId}-div`);
    if (!el) {
      console.log("Element not found:", `${realSpriteId}-div`);
      return;
    }
    var top = el.offsetTop;
    el.style.position = "relative";
    el.style.top = top + steps + "px";
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={handleClick}
      >
        Move Y{" "}
        <input
          type="number"
          className="text-black text-center w-16 mx-2"
          value={steps}
          onChange={(e) => setSteps(parseInt(e.target.value) || 0)}
          onClick={e => e.stopPropagation()} // Prevents accidental move on input click
        />{" "}
        steps
      </div>
    </Paper>
  );
};

export default MoveY;