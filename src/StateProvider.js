import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
// console.log(StateContext);

export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}
export default StateProvider;

export const useStateValue = () => useContext(StateContext);
export const useAuth = () => useContext(StateContext);
console.log(useStateValue);