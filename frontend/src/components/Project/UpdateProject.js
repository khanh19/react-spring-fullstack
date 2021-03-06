import React, { Component } from 'react'
import PropTypes from  "prop-types"
import {connect} from "react-redux";
import {createProject, getProject} from "../../actions/projectActions";
import classnames from "classnames"
class UpdateProject extends Component {
    constructor(){
        super();
        this.state={
            id:"",
            projectName:"",
            projectidentified:"",
            decription:"",
            start_date:"",
            end_date:"",
            errors:{projectName: "", description: ''}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
      if(nextProps.errors){
        this.setState({errors: nextProps.errors});
      }
      const {
          id,
          projectName,
          projectIdentified,
          description,
          start_date,
          end_date
      } = nextProps.project;
    
      this.setState({
          id,
          projectName,
          projectIdentified,
          description,
          start_date,
          end_date
        });
      }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getProject(id, this.props.history);
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        const updatedProject = {
            id: this.state.id,
            projectName: this.state.projectName,
            projectIdentified: this.state.projectIdentified,
            description: this.state.description,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        };
        console.log(this.props);
        this.props.createProject(updatedProject, this.props.history);
    }
    
    render() {
        // const {errors} = this.state;
        return (
        <div>
        <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Project form</h5>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg ", {"is-invalid": this.state.errors.projectName})} 
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.handleChange}
                  />
                   {this.state.errors.projectName && (<p className="invalid-feedback">{this.state.errors.projectName}</p>)}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    name="projectIdentified"
                    //to fix bug uncontrolled to controlled input
                    defaultValue={this.state.projectIdentified}
                    disabled
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className={classnames("form-control form-control-lg ", {"is-invalid": this.state.errors.description})} 
                    placeholder="Project Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                  {this.state.errors.description && (<p className="invalid-feedback">{this.state.errors.description}</p>)}
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
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
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    };
}
UpdateProject.propTypes = {
    getProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    project: state.project.project,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { getProject, createProject }
  )(UpdateProject);

