import { legacy_createStore as createStore } from "redux";
import { loadState } from "./localStorage";
import { cartReducer } from "./reducers/cartReducer";

const persitedState = loadState();

export const store = createStore(cartReducer, persitedState);
