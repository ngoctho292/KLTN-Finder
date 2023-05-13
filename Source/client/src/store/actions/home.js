import actionType from "./actionType";
import * as apis from '../../apis'

export const getHome = () => async (dispatch) => {
    try {
        const response = await apis.getMovies()
        dispatch({
            type: actionType.GET_MOVIES,
            homeData: response
        })
    } catch (error) {
        dispatch({
            type: actionType.GET_MOVIES,
            homeData: null
        })
    }
}

