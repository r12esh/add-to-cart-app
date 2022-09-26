import * as types from "../actions/action.types";

export const cartReducer = (state = [], actions) => {
  switch (actions.type) {
    case types.ADD_TO_CART:
      const itemIndex = state.findIndex((item) => item.id === actions.item.id);
      if (itemIndex === -1) {
        return [...state, { ...actions.item, quantity: 1 }];
      } else {
        const cartItems = [...state];
        const foundItem = cartItems[itemIndex];
        cartItems.splice(itemIndex, 1, {
          ...foundItem,
          quantity: foundItem.quantity + 1,
        });
        return cartItems;
      }
    case types.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== actions.id);
    default:
      return state;
  }
};
