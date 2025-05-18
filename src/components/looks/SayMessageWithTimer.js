// // import React, { useState } from "react";
// // import { connect } from "react-redux";
// // import Paper from "@material-ui/core/Paper";

// // const SayMessageWithTimer = ({ character, comp_id }) => {
// //   const [state, setState] = useState({
// //     show_msg: false,
// //     timer_message: "",
// //     timer_for_msg: 0,
// //   });

// //   /* Display Message with Timer */
// //   const displayMessage = () => {
// //     const el = document.getElementById(`${character.active}-message-box`);
// //     const el2 = document.getElementById(`${character.active}-message-box1`);
// //     el2.style.display = "none";
// //     if (state.show_msg) {
// //       setState({ ...state, show_msg: false });
// //       el.style.display = "none";
// //       return;
// //     }
// //     setState({ ...state, show_msg: true });

// //     el.style.display = "block";
// //     el.style.position = "relative";

// //     el.innerHTML = state.timer_message;
// //     window.setTimeout(() => {
// //       setState({ ...state, show_msg: false });
// //       el.style.display = "none";
// //     }, state.timer_for_msg * 1000);
// //   };

// //   return (
// //     <Paper elevation={3}>
// //       <div className="rounded text-center bg-purple-500 p-2 my-3">
// //         <div className="grid grid-cols-2 my-2">
// //           <div className="text-white">Message</div>
// //           <input
// //             className="mx-2 p-1 py-0 text-center"
// //             type="text"
// //             value={state.timer_message}
// //             onChange={(e) => {
// //               e.target.value.length > 0 &&
// //                 setState({ ...state, timer_message: e.target.value });
// //             }}
// //           />
// //         </div>
// //         <div className="grid grid-cols-2 my-2">
// //           <div className="text-white">Timer:</div>
// //           <input
// //             className="mx-2 p-1 py-0 text-center"
// //             type="number"
// //             value={state.timer_for_msg}
// //             onChange={(e) => {
// //               parseInt(e.target.value) > 0 &&
// //                 setState({ ...state, timer_for_msg: parseInt(e.target.value) });
// //             }}
// //           />
// //         </div>
// //         <div
// //           id={comp_id}
// //           className="flex flex-row flex-wrap text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
// //           onClick={() => displayMessage()}
// //         >
// //           {`Say ${state.timer_message}`}
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

// // export default connect(mapStateToProps)(SayMessageWithTimer);
// import React, { useState } from "react";
// import Paper from "@material-ui/core/Paper";

// const SayMessageWithTimer = ({ comp_id, spriteId }) => {
//   const [state, setState] = useState({
//     show_msg: false,
//     timer_message: "",
//     timer_for_msg: 0,
//   });

//   /* Display Message with Timer */
//   const displayMessage = () => {
//     const el = document.getElementById(`${spriteId}-message-box`);
//     const el2 = document.getElementById(`${spriteId}-message-box1`);
//     if (el2) el2.style.display = "none";
//     if (state.show_msg) {
//       setState({ ...state, show_msg: false });
//       if (el) el.style.display = "none";
//       return;
//     }
//     setState({ ...state, show_msg: true });

//     if (el) {
//       el.style.display = "block";
//       el.style.position = "relative";
//       el.innerHTML = state.timer_message;
//       window.setTimeout(() => {
//         setState((prev) => ({ ...prev, show_msg: false }));
//         el.style.display = "none";
//       }, state.timer_for_msg * 1000);
//     }
//   };

//   return (
//     <Paper elevation={3}>
//       <div className="rounded text-center bg-purple-500 p-2 my-3">
//         <div className="grid grid-cols-2 my-2">
//           <div className="text-white">Message</div>
//           <input
//             className="mx-2 p-1 py-0 text-center"
//             type="text"
//             value={state.timer_message}
//             onChange={(e) => {
//               setState({ ...state, timer_message: e.target.value });
//             }}
//           />
//         </div>
//         <div className="grid grid-cols-2 my-2">
//           <div className="text-white">Timer:</div>
//           <input
//             className="mx-2 p-1 py-0 text-center"
//             type="number"
//             value={state.timer_for_msg}
//             onChange={(e) => {
//               setState({ ...state, timer_for_msg: parseInt(e.target.value) || 0 });
//             }}
//           />
//         </div>
//         <div
//           id={comp_id}
//           className="flex flex-row flex-wrap text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
//           onClick={displayMessage}
//         >
//           {`Say ${state.timer_message}`}
//         </div>
//       </div>
//     </Paper>
//   );
// };

// export default SayMessageWithTimer;

import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";

const SayMessageWithTimer = ({ comp_id, spriteId }) => {
  const [state, setState] = useState({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
  });

  /* Display Message with Timer */
  const displayMessage = () => {
    // Use the global spriteId if this prop is null
    const realSpriteId = spriteId || window.__currentPlayAllSpriteId;
    console.log("SayMessageWithTimer block spriteId:", realSpriteId);

    const el = document.getElementById(`${realSpriteId}-message-box`);
    const el2 = document.getElementById(`${realSpriteId}-message-box1`);
    if (el2) el2.style.display = "none";
    if (state.show_msg) {
      setState({ ...state, show_msg: false });
      if (el) el.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });

    if (el) {
      el.style.display = "block";
      el.style.position = "relative";
      el.innerHTML = state.timer_message;
      window.setTimeout(() => {
        setState((prev) => ({ ...prev, show_msg: false }));
        el.style.display = "none";
      }, state.timer_for_msg * 1000);
    }
  };

  return (
    <Paper elevation={3}>
      <div className="rounded text-center bg-purple-500 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Message</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={state.timer_message}
            onChange={(e) => {
              setState({ ...state, timer_message: e.target.value });
            }}
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Timer:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.timer_for_msg}
            onChange={(e) => {
              setState({ ...state, timer_for_msg: parseInt(e.target.value) || 0 });
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex flex-row flex-wrap text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={displayMessage}
        >
          {`Say ${state.timer_message}`}
        </div>
      </div>
    </Paper>
  );
};

export default SayMessageWithTimer;