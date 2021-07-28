import React, { Component } from 'react'
import CreateProjectButton from './Project/CreateProjectButton';
import ProjectItem from './Project/ProjectItem';
import {connect} from "react-redux";
import {getProjects} from "../actions/projectActions";
import PropTypes from "prop-types";
class Dashboard extends Component {
    //lifecycle Hook
    //mount after component render
    componentDidMount(){
      this.props.getProjects();
    }
    render() {
        const { projectList } = this.props.project;

        return (
            <div className="projects">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center">Projects</h1>
                  <br />
                  <CreateProjectButton/>
                  <br />
                  <hr />
                  {projectList.map(project => (
                     <ProjectItem key={project.id} project={project} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
}
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, {getProjects})(Dashboard);
