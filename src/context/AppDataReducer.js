export const reducer = (state, action) => {
    switch (action.type) {
        case "launch":
            return {
                ...state,
                running: action.setRunning
            } 
    }
};
