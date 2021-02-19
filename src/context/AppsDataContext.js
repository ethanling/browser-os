import { useState, useEffect, createContext } from "react";
import { apps } from "../apps";

export const AppsDataContext = createContext(apps);

export const AppsDataProvider = ({ children }) => {
  const [appData, setAppData] = useState(apps);

  const launchApp = (name) => {
    // Check if app exists
    const app = appData.filter((item, index) => item.name === name)[0]
    console.log("Initial App State:", app)
    const exists = app ? true : false;
    const isRunning = app.running;

    if (exists && !isRunning) {
      // Update application state
      app.running = true
      console.log(app.name, app.running)
      // Push update to app array
      //setAppData(prevState => {
        //prevstate
      //})
    }

    // Copy state obj
    // update state object
    // set as state
  }

  useEffect(() => {
    launchApp('Settings')
  }, [])

  return (
    <AppsDataContext.Provider value={appData}>
      {children}
    </AppsDataContext.Provider>
  );
};
