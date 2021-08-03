package com.example.backend.exception;

public class ProjectNotFoundExceptionResponse {
    private String ProjectNotFound;

    public ProjectNotFoundExceptionResponse(String ProjectNotFound) {
        this.ProjectNotFound = ProjectNotFound;
    }

    public String getProjectNotFound() {
        return this.ProjectNotFound;
    }

    public void setProjectNotFound(String ProjectNotFound) {
        this.ProjectNotFound = ProjectNotFound;
    }

}
