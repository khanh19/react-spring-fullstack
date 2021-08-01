package com.example.backend.services;

import com.example.backend.domain.Backlog;
import com.example.backend.domain.Project;
import com.example.backend.exception.ProjectIdException;
import com.example.backend.repository.BacklogRepository;
import com.example.backend.repository.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    public Project saveOrUpdateProject(Project project) {
        // Logic
        try {
            project.setProjectIdentified(project.getProjectIdentified().toUpperCase());
            if (project.getId() == null) {
                Backlog backlog = new Backlog();
                // Set relationship b/w backlog and project
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentified(project.getProjectIdentified().toUpperCase());
            }
            if (project.getId() != null) {
                project.setBacklog(
                        backlogRepository.findByProjectIdentified(project.getProjectIdentified().toUpperCase()));
            }
            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException(
                    "Project ID" + project.getProjectIdentified().toUpperCase() + " already exist");

        }
    }

    public Project findByProjectId(String projectId) {
        Project projector = projectRepository.findByProjectIdentified(projectId.toUpperCase());
        if (projector == null) {
            throw new ProjectIdException("Project ID " + projectId + " does not exist");
        }
        return projector;
    }

    public Iterable<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    public void deleteProjectByPID(String projectId) {
        Project project = projectRepository.findByProjectIdentified(projectId.toUpperCase());
        if (project == null) {
            throw new ProjectIdException("Project " + projectId + " can not be deleted");
        }
        projectRepository.delete(project);
    }

}
