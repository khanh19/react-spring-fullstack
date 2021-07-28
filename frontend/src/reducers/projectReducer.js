import { GET_PROJECTS } from "../actions/Types";

const initialState = {
    projectList: [],
    project: {}
};
export default function(state = initialState, action){
    switch (action.type) {
        case GET_PROJECTS:
            return {
                // ...state means taking the current value
                //of state
                ...state, projectList: action.payload
            };
        default:
            return state;
    }

}