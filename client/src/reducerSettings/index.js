export const ActionTypes = {
    OnInputChange: 'ON_INPUT_CHANGE'
};

export const reducer = (state, action) => {
    console.log('inside reducer');
    const { type, payload } = action;
    switch(type) {
        case ActionTypes.OnInputChange:
            return {
                ...state,
                inputValue: payload
            }
        default: 
            return state;
    }
};

export const initialState = {
    inputValue: 'Better make it important..'
}