/**
 * Created by ofer on 29/10/17.
 */

import { FETCH_WEATHER } from "../actions/index.js";
export default  function (state = [], action) {
    // console.log("ACTION got", action);

    switch (action.type){
        case FETCH_WEATHER:
            return state.concat([ action.payload.data]);
            //can also write: return [action.payload.data, ...state]; (will give state, state, state.
    }

    return state;
}