import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Backlog from './Backlog';
import { getBacklog } from "../../actions/backlogAction"
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class ProjectBoard extends Component {
    constructor() {
        super();
        this.state = {
            errors: {}
        };
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getBacklog(id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    render() {
        const { id } = this.props.match.params;
        const { errors } = this.state;
        const { project_task_list } = this.props.backlog;
        let BoardContent;
        const boardAlgorithm = (errors, project_tasks) => {
            if (project_tasks.length < 1) {
                if (errors.projectNotFound) {
                    return (
                        <div className="alert alert-danger text-center" role="alert">
                            {errors.projectNotFound}
                        </div>
                    );
                } else {
                    return (
                        <div className="alert alert-info text-center" role="alert">
                            No Project Tasks on this board
                        </div>
                    );
                }
            } else {
                return <Backlog project_tasks_prop={project_task_list} />;
            }
        };

        BoardContent = boardAlgorithm(errors, project_task_list);
        return (
            <div className="container">
                <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> CREATE TASK</i>
                </Link>
                <br />
                <hr />
                {BoardContent}
            </div>
        )
    }
}

ProjectBoard.proptype = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    backlog: state.backlog,
    errors: state.errors
})

export default connect(mapStateToProps, { getBacklog })(ProjectBoard);
