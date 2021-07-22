export const reducer = (state, action) => {
    switch (action.type) {
        case "toggleLaunch":
            return {
                ...state,
                running: action.setRunning
            } 
   }
};
