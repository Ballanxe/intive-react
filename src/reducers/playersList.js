import {playersFetchData} from '../actions/players';

export function playersHasErroed(state = false, action){
  switch (action.type){
    case 'PLAYERS_HAS_ERROED':
      return action.hasErroed
    default:
      return state
  }
}


export function playersAreLoading(state = false, action){
  switch (action.type){
    case 'PLAYERS_ARE_LOADING':
      return action.loading
    default:
      return state
  }
}


export function playesrSuccessPayload(state = false, action){
  switch (action.type){
    case 'PLAYERS_FETCH_DATA_SUCCESS':
      return action.players
    default:
      return state
  }
}

// export function playersFetchPayload(state = null, action){
//   switch (action.type) {
//     case String(playersFetchData.pending):
//       return action.payload
//     case String(playersFetchData.fulfilled):
//       return action.payload
//     case String(playersFetchData.rejected):
//       return action.payload
//     default:
//       return state;
//   }
// };
// const defaultState = {
//   appName: 'Super de pinga',
// }

// // export default (state = defaultState, action) => {
// //   switch (action.type) {

// //     case 'PLAYERS_LIST':
// //       console.log("hey you", action.payload)
// //       return {
// //         ...state,
// //         players: "Hola como estan",
// //         comuna: "comuna"
// //       };
// //     default:
// //       console.log("hey youmm", action.payload)
// //       return state;
// //   }
  
// // };


// export function playersPayload(state = defaultState, action) {
//   switch (action.type){
//     case 'PLAYERS_ARE_LOADED':
//       return action.payload;

//     default:
//       return state;
//   }
// }