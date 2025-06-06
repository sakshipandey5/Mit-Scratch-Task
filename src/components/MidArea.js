// // import React from "react";
// // import { connect } from "react-redux";
// // import { addList } from "../redux/midarea/actions";
// // import { Droppable, Draggable } from "react-beautiful-dnd";
// // import { getComponent } from "./getComponents";
// // import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
// // import Button from "@material-ui/core/Button";
// // // import AddIcon from "@material-ui/icons/Add";
// // import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// // import { purple } from "@material-ui/core/colors";
// // import Paper from "@material-ui/core/Paper";

// // // Styling for MaterialUI Components
// // const useStyles = makeStyles(() =>
// //   createStyles({
// //     button: {
// //       margin: 0,
// //     },
// //   })
// // );

// // // Customized button for Running Lists
// // const RunButton = withStyles((theme) => ({
// //   root: {
// //     color: theme.palette.getContrastText(purple[500]),
// //     backgroundColor: purple[500],
// //     fontSize: "13px",
// //     "&:hover": {
// //       backgroundColor: purple[700],
// //     },
// //   },
// // }))(Button);

// // // Mid Area Component
// // function MidArea({ area_list, add_list, event_values }) {
// //   const classes = useStyles();
// //   const eventFire = (el, etype) => {
// //     if (el && el.fireEvent) {
// //       el.fireEvent("on" + etype);
// //     } else if (el) {
// //       var evObj = document.createEvent("Events");
// //       evObj.initEvent(etype, true, false);
// //       el.dispatchEvent(evObj);
// //     }
// //   };

// //   // Handle Running the list
// //   const handleClick = (arr, id) => {
// //     if (arr.length === 0) return;
// //     let i = 0;

// //     let repeat = 1;

// //     let str1 = `comp${arr[i]}-${id}-${i}`;

// //     // Handle Wait at first index
// //     if (arr[i] === "WAIT") {
// //       let str2 = `comp${arr[i]}-${id}-${i}`;
// //       let last_time = new Date().getTime();
// //       let curr_time = new Date().getTime();

// //       while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
// //         curr_time = new Date().getTime();
// //       }
// //     }

// //     // Handle Repeat at first index
// //     else if (arr[i] !== "REPEAT") {
// //       eventFire(document.getElementById(str1), "click");
// //     } else {
// //       repeat = event_values.repeat[str1] + 1;
// //     }
// //     i++;

// //     /* Each function execution takes 2 seconds */
// //     var cnt = setInterval(() => {
// //       if (i === arr.length) {
// //         clearInterval(cnt);
// //       }

// //       // Handle Wait
// //       if (arr[i] === "WAIT") {
// //         let str2 = `comp${arr[i]}-${id}-${i}`;
// //         let last_time = new Date().getTime();
// //         let curr_time = new Date().getTime();

// //         while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
// //           curr_time = new Date().getTime();
// //         }
// //         i++;
// //       }
// //       // Handle Repeat Component at current index
// //       else if (arr[i] === "REPEAT") {
// //         let str2 = `comp${arr[i]}-${id}-${i}`;
// //         repeat = repeat * (event_values.repeat[str2] + 1);
// //         i++;
// //       }
// //       // If Repeat component is at previous index
// //       else if (arr[i - 1] === "REPEAT" && repeat > 2) {
// //         let str2 = `comp${arr[i]}-${id}-${i}`;
// //         eventFire(document.getElementById(str2), "click");
// //         repeat--;
// //       } else {
// //         let str2 = `comp${arr[i]}-${id}-${i}`;
// //         eventFire(document.getElementById(str2), "click");
// //         i++;
// //       }
// //     }, 2000);
// //   };
// //   return (
// //     <div className="flex-1 h-full overflow-auto p-3">
// //       <div className="flex justify-between">
// //         <div className="font-bold mb-5 text-center border border-2 rounded text-white bg-green-400 p-2 w-auto">
// //           Mid Area
// //         </div>

// //         <div>
// //           {/* <Button
// //             variant="contained"
// //             color="primary"
// //             className={classes.button}
// //             startIcon={<AddIcon />}
// //             onClick={() => add_list()}
// //           >
// //             Add List{" "}
// //           </Button> */}
// //         </div>
// //       </div>
// //       <div className="grid grid-flow-col">
// //         {area_list.midAreaLists.map((l) => {
// //           return (
// //             <div className="w-60" key={l.id}>
// //               <Paper elevation={3} className="p-4">
// //                 <div className="w-52 border border-2 border-gray-300 p-2">
// //                   <Droppable droppableId={l.id} type="COMPONENTS">
// //                     {(provided) => {
// //                       return (
// //                         <ul
// //                           className={`${l.id} w-48 h-full`}
// //                           {...provided.droppableProps}
// //                           ref={provided.innerRef}
// //                         >
// //                           <div className="text-center mx-auto my-2 mb-4">
// //                             <RunButton
// //                               variant="contained"
// //                               className={classes.button}
// //                               startIcon={<PlayArrowIcon />}
// //                               onClick={() => handleClick(l.comps, l.id)}
// //                             >
// //                               Run{" "}
// //                             </RunButton>
// //                           </div>

// //                           {l.comps &&
// //                             l.comps.map((x, i) => {
// //                               let str = `${x}`;
// //                               let component_id = `comp${str}-${l.id}-${i}`;

// //                               return (
// //                                 <Draggable
// //                                   key={`${str}-${l.id}-${i}`}
// //                                   draggableId={`${str}-${l.id}-${i}`}
// //                                   index={i}
// //                                 >
// //                                   {(provided) => (
// //                                     <li
// //                                       ref={provided.innerRef}
// //                                       {...provided.draggableProps}
// //                                       {...provided.dragHandleProps}
// //                                     >
// //                                       {getComponent(str, component_id)}
// //                                       {provided.placeholder}
// //                                     </li>
// //                                   )}
// //                                 </Draggable>
// //                               );
// //                             })}
// //                           {provided.placeholder}
// //                         </ul>
// //                       );
// //                     }}
// //                   </Droppable>
// //                 </div>
// //               </Paper>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // // mapping state to props
// // const mapStateToProps = (state) => {
// //   return {
// //     area_list: state.list,
// //     event_values: state.event,
// //   };
// // };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     add_list: () => dispatch(addList()),
// //   };
// // };

// // export default connect(mapStateToProps, mapDispatchToProps)(MidArea);
// import React from "react";
// import { connect } from "react-redux";
// import { addList } from "../redux/midarea/actions";
// import { Droppable, Draggable } from "react-beautiful-dnd";
// import { getComponent } from "./getComponents";
// import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import { purple } from "@material-ui/core/colors";
// import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles(() =>
//   createStyles({
//     button: { margin: 0 },
//     playAllButton: {
//       marginBottom: 16,
//       backgroundColor: purple[500],
//       color: "#fff",
//       fontSize: "15px",
//       padding: "8px 20px",
//       "&:hover": { backgroundColor: purple[700] },
//     },
//   })
// );

// const RunButton = withStyles((theme) => ({
//   root: {
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     fontSize: "13px",
//     "&:hover": { backgroundColor: purple[700] },
//   },
// }))(Button);

// function MidArea({ area_list, add_list, event_values, characters }) {
//   const classes = useStyles();

//   const eventFire = (el, etype) => {
//     if (el && el.fireEvent) {
//       el.fireEvent("on" + etype);
//     } else if (el) {
//       var evObj = document.createEvent("Events");
//       evObj.initEvent(etype, true, false);
//       el.dispatchEvent(evObj);
//     }
//   };

//   // Run a block list for a specific sprite
//   const handleClick = (arr, id, spriteId) => {
//     if (arr.length === 0) return;
//     let i = 0,
//       repeat = 1;
//     let str1 = `comp${arr[i]}-${id}-${i}`;
//     if (arr[i] === "WAIT") {
//       let str2 = `comp${arr[i]}-${id}-${i}`;
//       let last_time = new Date().getTime();
//       let curr_time = new Date().getTime();
//       while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
//         curr_time = new Date().getTime();
//       }
//     } else if (arr[i] !== "REPEAT") {
//       eventFire(document.getElementById(str1), "click");
//     } else {
//       repeat = event_values.repeat[str1] + 1;
//     }
//     i++;
//     var cnt = setInterval(() => {
//       if (i === arr.length) {
//         clearInterval(cnt);
//       }
//       if (arr[i] === "WAIT") {
//         let str2 = `comp${arr[i]}-${id}-${i}`;
//         let last_time = new Date().getTime();
//         let curr_time = new Date().getTime();
//         while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
//           curr_time = new Date().getTime();
//         }
//         i++;
//       } else if (arr[i] === "REPEAT") {
//         let str2 = `comp${arr[i]}-${id}-${i}`;
//         repeat = repeat * (event_values.repeat[str2] + 1);
//         i++;
//       } else if (arr[i - 1] === "REPEAT" && repeat > 2) {
//         let str2 = `comp${arr[i]}-${id}-${i}`;
//         eventFire(document.getElementById(str2), "click");
//         repeat--;
//       } else {
//         let str2 = `comp${arr[i]}-${id}-${i}`;
//         eventFire(document.getElementById(str2), "click");
//         i++;
//       }
//     }, 2000);
//   };

//   // Play All: run playAllList for every sprite
//   const handlePlayAll = () => {
//     const playAllList = area_list.playAllList;
//     if (!playAllList || !playAllList.comps.length) return;
//     characters.forEach((sprite) => {
//       handleClick(playAllList.comps, playAllList.id, sprite.id);
//     });
//   };

//   // --- UI ---
//   return (
//     <div className="flex-1 h-full overflow-auto p-3">
//       <div className="flex justify-between">
//         <div className="font-bold mb-5 text-center border border-2 rounded text-white bg-green-400 p-2 w-auto">
//           Mid Area
//         </div>
//       </div>
//       {/* Play All Block Area */}
//       <div className="mb-6">
//         <Droppable droppableId="playAllList" type="COMPONENTS">
//           {(provided) => (
//             <div
//               className="w-60"
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//               style={{
//                 border: "2px dashed #a855f7",
//                 borderRadius: 8,
//                 padding: 12,
//                 background: "#faf5ff",
//                 marginBottom: 16,
//               }}
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <span className="font-bold text-purple-700">
//                   Play All Blocks
//                 </span>
//                 <Button
//                   variant="contained"
//                   className={classes.playAllButton}
//                   startIcon={<PlayArrowIcon />}
//                   onClick={handlePlayAll}
//                   disabled={!area_list.playAllList.comps.length}
//                 >
//                   Play All
//                 </Button>
//               </div>
//               {area_list.playAllList.comps.map((x, i) => {
//                 let str = `${x}`;
//                 let component_id = `comp${str}-playAllList-${i}`;
//                 return (
//                   <Draggable
//                     key={component_id}
//                     draggableId={component_id}
//                     index={i}
//                   >
//                     {(provided) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         className="mb-2"
//                       >
//                         {getComponent(str, component_id, null)}
//                       </div>
//                     )}
//                   </Draggable>
//                 );
//               })}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </div>
//       {/* Per-sprite block lists */}
//       <div className="grid grid-flow-col">
//         {area_list.midAreaLists.map((l) => {
//           return (
//             <div className="w-60" key={l.id}>
//               <Paper elevation={3} className="p-4">
//                 <div className="w-52 border border-2 border-gray-300 p-2">
//                   <Droppable droppableId={l.id} type="COMPONENTS">
//                     {(provided) => (
//                       <ul
//                         className={`${l.id} w-48 h-full`}
//                         {...provided.droppableProps}
//                         ref={provided.innerRef}
//                       >
//                         <div className="text-center mx-auto my-2 mb-4">
//                           <RunButton
//                             variant="contained"
//                             className={classes.button}
//                             startIcon={<PlayArrowIcon />}
//                             onClick={() => handleClick(l.comps, l.id, l.id)}
//                           >
//                             Run{" "}
//                           </RunButton>
//                         </div>
//                         {l.comps &&
//                           l.comps.map((x, i) => {
//                             let str = `${x}`;
//                             let component_id = `comp${str}-${l.id}-${i}`;
//                             return (
//                               <Draggable
//                                 key={`${str}-${l.id}-${i}`}
//                                 draggableId={`${str}-${l.id}-${i}`}
//                                 index={i}
//                               >
//                                 {(provided) => (
//                                   <li
//                                     ref={provided.innerRef}
//                                     {...provided.draggableProps}
//                                     {...provided.dragHandleProps}
//                                   >
//                                     {getComponent(str, component_id, l.id)}
//                                     {provided.placeholder}
//                                   </li>
//                                 )}
//                               </Draggable>
//                             );
//                           })}
//                         {provided.placeholder}
//                       </ul>
//                     )}
//                   </Droppable>
//                 </div>
//               </Paper>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// // mapping state to props
// const mapStateToProps = (state) => ({
//   area_list: state.list,
//   event_values: state.event,
//   characters: state.character.characters,
//   activeSpriteId: state.character.activeSpriteId, // <-- add this
// });

// const mapDispatchToProps = (dispatch) => ({
//   add_list: () => dispatch(addList()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(MidArea);





// import React from "react";
// import { connect } from "react-redux";
// import { addList } from "../redux/midarea/actions";
// import { Droppable, Draggable } from "react-beautiful-dnd";
// import { getComponent } from "./getComponents";
// import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import { purple } from "@material-ui/core/colors";
// import Paper from "@material-ui/core/Paper";

// window.__currentPlayAllSpriteId = null;

// const useStyles = makeStyles(() =>
//   createStyles({
//     button: { margin: 0 },
//     playAllButton: {
//       marginBottom: 16,
//       backgroundColor: purple[500],
//       color: "#fff",
//       fontSize: "15px",
//       padding: "8px 20px",
//       "&:hover": { backgroundColor: purple[700] },
//     },
//   })
// );

// const RunButton = withStyles((theme) => ({
//   root: {
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     fontSize: "13px",
//     "&:hover": { backgroundColor: purple[700] },
//   },
// }))(Button);

// function MidArea({ area_list, add_list, event_values, characters, activeSpriteId }) {
//   const classes = useStyles();

//   const eventFire = (el, etype) => {
//     if (el && el.fireEvent) {
//       el.fireEvent("on" + etype);
//     } else if (el) {
//       var evObj = document.createEvent("Events");
//       evObj.initEvent(etype, true, false);
//       el.dispatchEvent(evObj);
//     }
//   };

//   // Run a block list for a specific sprite
//   const handleClick = (arr, id, spriteId) => {
//     if (arr.length === 0) return;
//     let i = 0,
//       repeat = 1;
//     let str1 = `comp${arr[i]}-${id}-${i}`;
//     if (arr[i] === "WAIT") {
//       let str2 = `comp${arr[i]}-${id}-${i}`;
//       let last_time = new Date().getTime();
//       let curr_time = new Date().getTime();
//       while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
//         curr_time = new Date().getTime();
//       }
//     } else if (arr[i] !== "REPEAT") {
//       eventFire(document.getElementById(str1), "click");
//     } else {
//       repeat = event_values.repeat[str1] + 1;
//     }
//     i++;
//     var cnt = setInterval(() => {
//       if (i === arr.length) {
//         clearInterval(cnt);
//       }
//       if (arr[i] === "WAIT") {
//         let str2 = `comp${arr[i]}-${id}-${i}`;
//         let last_time = new Date().getTime();
//         let curr_time = new Date().getTime();
//         while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
//           curr_time = new Date().getTime();
//         }
//         i++;
//       } else if (arr[i] === "REPEAT") {
//         let str2 = `comp${arr[i]}-${id}-${i}`;
//         repeat = repeat * (event_values.repeat[str2] + 1);
//         i++;
//       } else if (arr[i - 1] === "REPEAT" && repeat > 2) {
//         let str2 = `comp${arr[i]}-${id}-${i}`;
//         eventFire(document.getElementById(str2), "click");
//         repeat--;
//       } else {
//         let str2 = `comp${arr[i]}-${id}-${i}`;
//         eventFire(document.getElementById(str2), "click");
//         i++;
//       }
//     }, 2000);
//   };

//   // Play All: run playAllList for every sprite
// const handlePlayAll = () => {
//   const playAllList = area_list.playAllList;
//   if (!playAllList || !playAllList.comps.length) return;
//   characters.forEach((sprite) => {
//     window.__currentPlayAllSpriteId = sprite.id;
//     handleClick(playAllList.comps, playAllList.id, sprite.id);
//   });
//   window.__currentPlayAllSpriteId = null;
// };

//   return (
//     <div className="flex-1 h-full overflow-auto p-3">
//       <div className="flex justify-between">
//         <div className="font-bold mb-5 text-center border border-2 rounded text-white bg-green-400 p-2 w-auto">
//           Mid Area
//         </div>
//       </div>
//       {/* Play All Block Area */}
//       <div className="mb-6">
//         <Droppable droppableId="playAllList" type="COMPONENTS">
//           {(provided) => (
//             <div
//               className="w-60"
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//               style={{
//                 border: "2px dashed #a855f7",
//                 borderRadius: 8,
//                 padding: 12,
//                 background: "#faf5ff",
//                 marginBottom: 16,
//               }}
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <span className="font-bold text-purple-700">
//                   Play All Blocks
//                 </span>
//                 <Button
//                   variant="contained"
//                   className={classes.playAllButton}
//                   startIcon={<PlayArrowIcon />}
//                   onClick={handlePlayAll}
//                   disabled={!area_list.playAllList.comps.length}
//                 >
//                   Play All
//                 </Button>
//               </div>
//               {area_list.playAllList.comps.map((x, i) => {
//                 let str = `${x}`;
//                 let component_id = `comp${str}-playAllList-${i}`;
//                 return (
//                   <Draggable
//                     key={component_id}
//                     draggableId={component_id}
//                     index={i}
//                   >
//                     {(provided) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         className="mb-2"
//                       >
//                         {getComponent(str, component_id, null)}
//                       </div>
//                     )}
//                   </Draggable>
//                 );
//               })}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </div>
//       {/* Per-sprite block lists */}
//       <div className="grid grid-flow-col">
//         {area_list.midAreaLists.map((l) => {
//           return (
//             <div className="w-60" key={l.id}>
//               <Paper elevation={3} className="p-4">
//                 <div className="w-52 border border-2 border-gray-300 p-2">
//                   <Droppable droppableId={l.id} type="COMPONENTS">
//                     {(provided) => (
//                       <ul
//                         className={`${l.id} w-48 h-full`}
//                         {...provided.droppableProps}
//                         ref={provided.innerRef}
//                       >
//                         <div className="text-center mx-auto my-2 mb-4">
//                          <RunButton
//   variant="contained"
//   className={classes.button}
//   startIcon={<PlayArrowIcon />}
//   onClick={() => handleClick(l.comps, l.id, activeSpriteId)}
// >
//   Run{" "}
// </RunButton>
//                         </div>
//                         {l.comps &&
//                           l.comps.map((x, i) => {
//                             let str = `${x}`;
//                             let component_id = `comp${str}-${l.id}-${i}`;
//                             return (
//                               <Draggable
//                                 key={`${str}-${l.id}-${i}`}
//                                 draggableId={`${str}-${l.id}-${i}`}
//                                 index={i}
//                               >
//                                 {(provided) => (
//                                   <li
//                                     ref={provided.innerRef}
//                                     {...provided.draggableProps}
//                                     {...provided.dragHandleProps}
//                                   >
//                                     {getComponent(str, component_id, activeSpriteId)}
//                                     {provided.placeholder}
//                                   </li>
//                                 )}
//                               </Draggable>
//                             );
//                           })}
//                         {provided.placeholder}
//                       </ul>
//                     )}
//                   </Droppable>
//                 </div>
//               </Paper>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// // mapping state to props
// const mapStateToProps = (state) => ({
//   area_list: state.list,
//   event_values: state.event,
//   characters: state.character.characters,
//   activeSpriteId: state.character.activeSpriteId, // <-- added for active sprite
// });

// const mapDispatchToProps = (dispatch) => ({
//   add_list: () => dispatch(addList()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(MidArea);



import React from "react";
import { connect } from "react-redux";
import { addList } from "../redux/midarea/actions";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { purple } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import store from "../store"; 
import { swapMidAreaLists } from "../redux/midarea/actions"; 

window.__currentPlayAllSpriteId = null;

// --- GLOBAL SWAP FUNCTION FOR COLLISION FEATURE ---
window.swapAnimations = (spriteId1, spriteId2) => {
  store.dispatch(swapMidAreaLists(spriteId1, spriteId2));
};
// --------------------------------------------------

const useStyles = makeStyles(() =>
  createStyles({
    button: { margin: 0 },
    playAllButton: {
      marginBottom: 16,
      backgroundColor: purple[500],
      color: "#fff",
      fontSize: "15px",
      padding: "8px 20px",
      "&:hover": { backgroundColor: purple[700] },
    },
  })
);

const RunButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    fontSize: "13px",
    "&:hover": { backgroundColor: purple[700] },
  },
}))(Button);

function MidArea({ area_list, add_list, event_values, characters, activeSpriteId }) {
  const classes = useStyles();

  const eventFire = (el, etype) => {
    if (el && el.fireEvent) {
      el.fireEvent("on" + etype);
    } else if (el) {
      var evObj = document.createEvent("Events");
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  };

  // Run a block list for a specific sprite
  const handleClick = (arr, id, spriteId) => {
    if (arr.length === 0) return;
    let i = 0,
      repeat = 1;
    let str1 = `comp${arr[i]}-${id}-${i}`;
    if (arr[i] === "WAIT") {
      let str2 = `comp${arr[i]}-${id}-${i}`;
      let last_time = new Date().getTime();
      let curr_time = new Date().getTime();
      while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
        curr_time = new Date().getTime();
      }
    } else if (arr[i] !== "REPEAT") {
      eventFire(document.getElementById(str1), "click");
    } else {
      repeat = event_values.repeat[str1] + 1;
    }
    i++;
    var cnt = setInterval(() => {
      if (i === arr.length) {
        clearInterval(cnt);
      }
      if (arr[i] === "WAIT") {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        let last_time = new Date().getTime();
        let curr_time = new Date().getTime();
        while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
          curr_time = new Date().getTime();
        }
        i++;
      } else if (arr[i] === "REPEAT") {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        repeat = repeat * (event_values.repeat[str2] + 1);
        i++;
      } else if (arr[i - 1] === "REPEAT" && repeat > 2) {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        eventFire(document.getElementById(str2), "click");
        repeat--;
      } else {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        eventFire(document.getElementById(str2), "click");
        i++;
      }
    }, 2000);
  };

  // Play All: run playAllList for every sprite
  const handlePlayAll = () => {
    const playAllList = area_list.playAllList;
    if (!playAllList || !playAllList.comps.length) return;
    characters.forEach((sprite) => {
      window.__currentPlayAllSpriteId = sprite.id;
      handleClick(playAllList.comps, playAllList.id, sprite.id);
    });
    window.__currentPlayAllSpriteId = null;
  };

  return (
    <div className="flex-1 h-full overflow-auto p-3">
      <div className="flex justify-between">
        <div className="font-bold mb-5 text-center border border-2 rounded text-white bg-green-400 p-2 w-auto">
          Mid Area
        </div>
      </div>
      {/* Play All Block Area */}
      <div className="mb-6">
        <Droppable droppableId="playAllList" type="COMPONENTS">
          {(provided) => (
            <div
              className="w-60"
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{
                border: "2px dashed #a855f7",
                borderRadius: 8,
                padding: 12,
                background: "#faf5ff",
                marginBottom: 16,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-purple-700">
                  Play All Blocks
                </span>
                <Button
                  variant="contained"
                  className={classes.playAllButton}
                  startIcon={<PlayArrowIcon />}
                  onClick={handlePlayAll}
                  disabled={!area_list.playAllList.comps.length}
                >
                  Play All
                </Button>
              </div>
              {area_list.playAllList.comps.map((x, i) => {
                let str = `${x}`;
                let component_id = `comp${str}-playAllList-${i}`;
                return (
                  <Draggable
                    key={component_id}
                    draggableId={component_id}
                    index={i}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="mb-2"
                      >
                        {getComponent(str, component_id, null)}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      {/* Per-sprite block lists */}
      <div className="grid grid-flow-col">
        {area_list.midAreaLists.map((l) => {
          return (
            <div className="w-60" key={l.id}>
              <Paper elevation={3} className="p-4">
                <div className="w-52 border border-2 border-gray-300 p-2">
                  <Droppable droppableId={l.id} type="COMPONENTS">
                    {(provided) => (
                      <ul
                        className={`${l.id} w-48 h-full`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <div className="text-center mx-auto my-2 mb-4">
                          <RunButton
                            variant="contained"
                            className={classes.button}
                            startIcon={<PlayArrowIcon />}
                            onClick={() => handleClick(l.comps, l.id, activeSpriteId)}
                          >
                            Run{" "}
                          </RunButton>
                        </div>
                        {l.comps &&
                          l.comps.map((x, i) => {
                            let str = `${x}`;
                            let component_id = `comp${str}-${l.id}-${i}`;
                            return (
                              <Draggable
                                key={`${str}-${l.id}-${i}`}
                                draggableId={`${str}-${l.id}-${i}`}
                                index={i}
                              >
                                {(provided) => (
                                  <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {getComponent(str, component_id, activeSpriteId)}
                                    {provided.placeholder}
                                  </li>
                                )}
                              </Draggable>
                            );
                          })}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </div>
              </Paper>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// mapping state to props
const mapStateToProps = (state) => ({
  area_list: state.list,
  event_values: state.event,
  characters: state.character.characters,
  activeSpriteId: state.character.activeSpriteId, // added for active sprite
});

const mapDispatchToProps = (dispatch) => ({
  add_list: () => dispatch(addList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MidArea);