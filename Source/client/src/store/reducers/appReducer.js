import actionType from "../actions/actionType";

const initState = {
    movies: [],
}

const appReducer = (state = initState, action,) => {
    switch (action.type) {
        case actionType.GET_MOVIES:
            return {
                ...state,
                movies: action.homeData
            }

        default:
            return state
    }
}

export default appReducer