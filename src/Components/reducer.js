export const initialState = {
    user: "",
    api:[0]
};


const reducer = (state, action) => {
    switch(action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
            case 'ADD_API':
                // logic for adding item to basket
                return {
                    // return the existing state and updated values
                    ...state,
                    api: [action.item],
            }

      
     
        default:
            return state;
    }
}

export default reducer;
