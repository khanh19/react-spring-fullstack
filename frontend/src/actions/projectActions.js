import axios from "axios";
import {GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT} from "./Types";

export const createProject = (project, history) => async dispatch => {
    try {
        const response = await axios.post("http://localhost:8081/api/project", project);
        history.push("/dashboard");
        // to fix update error Bug
        dispatch({type:GET_ERRORS, 
          payload: {}});
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
};

export const getProject = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8081/api/project/${id}`);
        dispatch({
          type: GET_PROJECT,
          payload: res.data
        });
      } catch (error) {
        history.push("/dashboard");
      }
};

export const deleteProject = (id) => async dispatch => {
  if (
    window.confirm(
      "Are you sure? This will delete the project and all the data related to it"
    )
  ) {
    await axios.delete(`http://localhost:8081/api/project/${id}`);
    dispatch({
      type: DELETE_PROJECT,
      payload: id
    });
  }
}