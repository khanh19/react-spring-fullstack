import React, { Component } from 'react'
import PropTypes from  "prop-types"
import {connect} from "react-redux"
import {createProject} from "../../actions/projectActions";
import classnames from "classnames"
//Handling Form in React
class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            projectName: "",
            projectIdentified: "",
            description:"",
            start_date:"",
            end_date:"",
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //life cycle hooks
    //happen after mounting if there is any error
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        //avoid it from refreshing the page
        event.preventDefault();
        const newProject = {
            projectName: this.state.projectName,
            projectIdentified: this.state.projectIdentified,
            description: this.state.description,
            start_date: this.state.start_date,
            end_date: this.state.end_date
          };
          console.log(this.props);
          this.props.createProject(newProject, this.props.history);

    }

    render() {
        const {errors} = this.state;
        return (
        //check name attribute input fields
          //create constructor
          //set state
          //set value on input fields
          //create onChange function
          //set onChange on each input field
          //bind on constructor
          //check state change in the react extension
            <div>
                <div className="project">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 m-auto">
                                    <h5 className="display-4 text-center">Create Project form</h5>
                                    <hr />
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input type="text"
                                            // make it red when run into error 
                                            className={classnames("form-control form-control-lg ", {"is-invalid": errors.projectName})} 
                                            placeholder="Project Name"
                                            name="projectName" 
                                            value={this.state.projectName}
                                            onChange={this.handleChange}
                                            />
                                            {errors.projectName && (<p className="invalid-feedback">{errors.projectName}</p>)}
                                        </div>
                                        
                                        <div className="form-group">
                                            <input type="text" 
                                             className={classnames("form-control form-control-lg ", {"is-invalid": errors.projectIdentified})} 
                                             placeholder="Project Identified"
                                             name = "projectIdentified"
                                             value = {this.state.projectIdentified}
                                             onChange={this.handleChange}
                                             />
                                             {errors.projectIdentified && (<p className="invalid-feedback">{errors.projectIdentified}</p>)}
                                        </div>
                                        <div className="form-group">
                                            <textarea 
                                            className={classnames("form-control form-control-lg ", {"is-invalid": errors.description})} 
                                            placeholder="Project Description"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.handleChange}
                                            />
                                            {errors.projectIdentified && (<p className="invalid-feedback">{errors.description}</p>)}
                                        </div>
                                        <h6>Start Date</h6>
                                        <div className="form-group">
                                            <input type="date" 
                                            className="form-control form-control-lg" 
                                            name="start_date"
                                            value={this.state.start_date}
                                            onChange={this.handleChange}
                                             />
                                        </div>
                                        <h6>Estimated End Date</h6>
                                        <div className="form-group">
                                            <input 
                                            type="date" 
                                            className="form-control form-control-lg" 
                                            name="end_date"
                                            value={this.state.end_date} 
                                            onChange={this.handleChange}
                                            />
                                        </div>
                                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
//constraint for the type
AddProject.propTypes = {
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state =>({
    errors: state.errors
})
export default connect(mapStateToProps, {createProject})(AddProject);
