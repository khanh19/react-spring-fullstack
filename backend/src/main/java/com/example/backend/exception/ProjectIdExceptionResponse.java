package com.example.backend.exception;

public class ProjectIdExceptionResponse{
    private String projectIdentified;

    public ProjectIdExceptionResponse(String projectIdentifer) {
        this.projectIdentified = projectIdentifer;
    }


    public String getProjectIdentified() {
        return this.projectIdentified;
    }

    public void setProjectIdentified(String projectIdentified) {
        this.projectIdentified = projectIdentified;
    }
    

}