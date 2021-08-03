package com.example.backend.exception;

public class ProjectIdExceptionResponse {
    private String projectIdentified;

    public ProjectIdExceptionResponse(String projectIdentifed) {
        this.projectIdentified = projectIdentifed;
    }

    public String getProjectIdentified() {
        return this.projectIdentified;
    }

    public void setProjectIdentified(String projectIdentified) {
        this.projectIdentified = projectIdentified;
    }

}