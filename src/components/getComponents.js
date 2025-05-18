// import React from "react";
// import Move from "./motion/Move";
// import TurnAntiClockwise from "./motion/TurnAntiClockwise";
// import TurnClockwise from "./motion/TurnClockwise";
// import GotoXY from "./motion/Goto";

// import SayMessageWithTimer from "./looks/SayMessageWithTimer";

// import Repeat from "./control/Repeat";

// import MoveY from "./motion/MoveY";


// import ThinkWithTimer from "./looks/ThinkWithTimer";

// // fetch components based on different keys
// export const getComponent = (key, id) => {
//   switch (key) {
//     case "MOVE_Y":
//       return <MoveY comp_id={id} />;
//     case "MOVE":
//       return <Move comp_id={id} />;

//     case "TURN_CLOCKWISE":
//       return <TurnClockwise comp_id={id} />;

//     case "TURN_ANTI_CLOCKWISE":
//       return <TurnAntiClockwise comp_id={id} />;

//     case "GOTO_XY":
//       return <GotoXY comp_id={id} />;

//     case "SAY_MESSAGE_WITH_TIMER":
//       return <SayMessageWithTimer comp_id={id} />;

    

//     case "REPEAT":
//       return <Repeat comp_id={id} />;

//     case "THINK_TIMER":
//       return <ThinkWithTimer comp_id={id} />;

//     default:
//       return React.null;
//   }
// };
import React from "react";
import Move from "./motion/Move";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import TurnClockwise from "./motion/TurnClockwise";
import GotoXY from "./motion/Goto";
import SayMessageWithTimer from "./looks/SayMessageWithTimer";
import Repeat from "./control/Repeat";
import MoveY from "./motion/MoveY";
import ThinkWithTimer from "./looks/ThinkWithTimer";

// fetch components based on different keys
export const getComponent = (key, id, spriteId) => {
  switch (key) {
    case "MOVE_Y":
      return <MoveY comp_id={id} spriteId={spriteId} />;
    case "MOVE":
      return <Move comp_id={id} spriteId={spriteId} />;
    case "TURN_CLOCKWISE":
      return <TurnClockwise comp_id={id} spriteId={spriteId} />;
    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise comp_id={id} spriteId={spriteId} />;
    case "GOTO_XY":
      return <GotoXY comp_id={id} spriteId={spriteId} />;
    case "SAY_MESSAGE_WITH_TIMER":
      return <SayMessageWithTimer comp_id={id} spriteId={spriteId} />;
    case "REPEAT":
      return <Repeat comp_id={id} spriteId={spriteId} />;
    case "THINK_TIMER":
      return <ThinkWithTimer comp_id={id} spriteId={spriteId} />;
    default:
      return null;
  }
};