import { createContext, useReducer } from "react";
// Array of objects represetning all available apps with metadata
import { apps } from "../apps";
import { reducer } from './AppDataReducer'

export const AppsDataContext = createContext(apps);

export const AppsDataProvider = ({ children }) => {

    return (
        <AppsDataContext.Provider value={useReducer(reducer, apps)}>
            {children}
        </AppsDataContext.Provider>
    );
};
