export const initialState = {
    user: null,
    api:[]
};


const reducer = (state, action) => {
    switch(action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
            case 'ADD_API_ID':
                // logic for adding item to basket
                return {
                    // return the existing state and updated values
                    ...state,
                    api: [...state.api, action.api],
                };

      
     
        default:
            return state;
    }
}

export default reducer;
