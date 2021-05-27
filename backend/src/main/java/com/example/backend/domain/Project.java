package com.example.backend.domain;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;



@Entity
public class Project{
    //The @Idannotation is inherited from javax.persistence.Id， 
    //indicating the member field below is the primary key of current entity
    @Id 
    //The @GeneratedValue annotation is to configure the way of
    // increment of the specified column(field)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank(message = "Project name is required")
    private String projectName;
    
    @NotBlank(message = "Project Identifier is required")
    @Size(min=4, max=5, message="4-5 character")
    @Column(updatable = false, unique = true)
    private String projectIdentified;
    
    @NotBlank(message = "Description is required")
    private String description;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date start_date;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date end_date;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date create_date;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date update_date;

    public Project() {
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProjectName() {
        return this.projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectIdentified() {
        return this.projectIdentified;
    }

    public void setProjectIdentified(String projectIdentified) {
        this.projectIdentified = projectIdentified;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStart_date() {
        return this.start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return this.end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Date getCreate_date() {
        return this.create_date;
    }

    public void setCreate_date(Date create_date) {
        this.create_date = create_date;
    }

    public Date getUpdate_date() {
        return this.update_date;
    }

    public void setUpdate_date(Date update_date) {
        this.update_date = update_date;
    }


    @PrePersist
    //do before it is saved to database
    protected void onCreate(){
        this.create_date = new Date();
    }

    @PreUpdate
    //do before update something
    protected void onUpdate(){
        this.update_date = new Date();
    }
}