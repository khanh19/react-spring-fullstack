package com.example.backend.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Backlog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer projectTaskSeq = 0;
    private String projectIdentified;

    // OneToOne with project
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "project_id", nullable = false)
    @JsonIgnore
    private Project project;

    // OneToMany projectTask
    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER, mappedBy = "backlog", orphanRemoval = true)
    private List<ProjectTask> projectTask = new ArrayList<>();

    public List<ProjectTask> getProjectTask() {
        return this.projectTask;
    }

    public void setProjectTask(List<ProjectTask> projectTask) {
        this.projectTask = projectTask;
    }

    public Backlog() {
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getProjectTaskSeq() {
        return this.projectTaskSeq;
    }

    public void setProjectTaskSeq(Integer projectTaskSeq) {
        this.projectTaskSeq = projectTaskSeq;
    }

    public String getProjectIdentified() {
        return this.projectIdentified;
    }

    public void setProjectIdentified(String projectIdentified) {
        this.projectIdentified = projectIdentified;
    }

    public Project getProject() {
        return this.project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

}
