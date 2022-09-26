export const loadState = () => {
  try {
    const cartState = localStorage.getItem("cartState");
    if (!cartState) {
      return undefined;
    }
    return JSON.parse(cartState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const stringifiedCartState = JSON.stringify(state);
    localStorage.setItem("cartState", stringifiedCartState);
  } catch (err) {
    console.log(err);
  }
};
