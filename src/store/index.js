// import { createContext } from "react";
// import useReducerWithThunk from "use-reducer-thunk";
// import {
//   ADD_RECORD,
//   // REMOVE_RECORD,
//   // EDIT_RECORD,
//   SET_DATE,
//   ADD_CLASS
// } from "../utils";

// export const StoreContext = createContext();
// let lsDate = localStorage.getItem("date")
//   ? localStorage.getItem("date")
//   : "";

// const initialState = {
//   date: new Date(),
//   aClass: "",
//   info: [],
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case SET_DATE:
//       console.log(action.payload+'action.payload');
//       return {
//         ...state,
//         date: action.payload,
//       };
//     case ADD_CLASS:
//       return {
//         ...state,
//         aClass: action.payload,
//       };
//     case ADD_RECORD:
//       return {
//         ...state,
//         info: action.payload,
//       };
//     case ADD_CART_ITEM:
//       const item = action.payload;
//       const product = state.cartItems.find((x) => x.id === item.id);
//       if (product) {
//         cartItems = state.cartItems.map((x) =>
//           x.id === product.id ? item : x
//         );
//         return { ...state, cartItems };
//       }
//       cartItems = [...state.cartItems, item];
//       return { ...state, cartItems };
//     case REMOVE_CART_ITEM:
//       cartItems = state.cartItems.filter((x) => x.id !== action.payload);
//       return { ...state, cartItems };
//     case SET_PRODUCT_DETAIL:
//       return { ...state, productDetail: action.payload };
//     default:
//       return state;
//   }
// }

// export function StoreProvider(props) {
//   const [state, dispatch] = useReducerWithThunk(
//     reducer,
//     initialState
//   );
//   const value = { state, dispatch };

//   return (
//     <StoreContext.Provider value={value}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// }