import { DELETE_PROJECT, GET_PROJECT, GET_PROJECTS } from "../actions/Types";

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
        case GET_PROJECT:
            return{
                ...state, project: action.payload
            };
        case DELETE_PROJECT:
            return{
                ...state, projectList: state.projectList.filter(
                    project => project.projectIdentified !== action.payload
                  )
            };
        default:
            return state;
    }
}