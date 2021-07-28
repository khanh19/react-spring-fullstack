import axios from "axios";
import {GET_ERRORS} from "./Types";
import {GET_PROJECTS} from "./Types";
export const createProject = (project, history) => async dispatch => {
    try {
        const response = await axios.post("http://localhost:8081/api/project", project);
        history.push("/dashboard");
    }catch(error){
        dispatch({type:GET_ERRORS, 
            payload: error.response.data});
    }
};

export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8081/api/project/all");
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });
}