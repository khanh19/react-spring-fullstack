import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import classnames from "classnames";
import {addProjectTask} from "../../../actions/backlogAction";
import PropTypes from "prop-types";
class AddProjectTask extends Component {
    constructor(props) {
        super(props);
        const { id } = this.props.match.params;
        this.state = {
          summary: "",
          acceptanceCriteria: "",
          status: "",
          priority: 0,
          dueDate: "",
          projectIdentified: id,
          errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    //hooks LifeCycle
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        const task = {
          summary: this.state.summary,
          acceptanceCriteria: this.state.acceptanceCriteria,
          status: this.state.status,
          priority: this.state.priority,
          dueDate: this.state.dueDate
        }

        console.log(task);
        this.props.addProjectTask(this.state.projectIdentified, task, this.props.history);
    }

    render() {
        const {id} = this.props.match.params;
        const {errors} = this.state;
        return (
            <div className="add-PBI">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <Link to={`/projectBoard/${id}`} className="btn btn-light">
                    Back to Project Board
                  </Link>
                  <h4 className="display-4 text-center">Add Project Task</h4>
                  <p className="lead text-center">Project Name + Project Code</p>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.summary
                    })}
                        name="summary"
                        placeholder="Project Task summary"
                        value={this.state.summary}
                        onChange={this.handleChange}
                      />
                      {errors.summary && (
                    <p className="invalid-feedback">{errors.summary}</p>
                  )}
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control form-control-lg"
                        placeholder="Acceptance Criteria"
                        name="acceptanceCriteria"
                        value={this.state.acceptanceCriteria}
                        onChange={this.handleChange}
                      />

                    </div>
                    <h6>Due Date</h6>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        name="dueDate"
                        value={this.state.dueDate}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        name="priority"
                        value={this.state.priority}
                        onChange={this.handleChange}
                      >
                        <option value={0}>Select Priority</option>
                        <option value={1}>High</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Low</option>
                      </select>
                    </div>
    
                    <div className="form-group">
                      <select
                        className="form-control form-control-lg"
                        name="status"
                        value={this.state.status}
                        onChange={this.handleChange}
                      >
                        <option value="">Select Status</option>
                        <option value="TO_DO">TO DO</option>
                        <option value="IN_PROGRESS">IN PROGRESS</option>
                        <option value="DONE">DONE</option>
                      </select>
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
        );
      }
}

AddProjectTask.proptype = {
    addProjectTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});
export default connect(mapStateToProps, {addProjectTask})(AddProjectTask);
