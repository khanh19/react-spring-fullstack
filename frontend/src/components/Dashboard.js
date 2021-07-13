import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';

class Dashboard extends Component {
    render() {
        return (
            <div>
            <h1 className="alert alert-success"> Welcome to Khanh's world</h1>
            <ProjectItem/>
            </div>
        );
    }
}
export default Dashboard;
