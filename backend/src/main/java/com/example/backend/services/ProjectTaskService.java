package com.example.backend.services;

import com.example.backend.domain.Backlog;
import com.example.backend.domain.Project;
import com.example.backend.domain.ProjectTask;
import com.example.backend.exception.ProjectNotFoundException;
import com.example.backend.repository.BacklogRepository;
import com.example.backend.repository.ProjectRepository;
import com.example.backend.repository.ProjectTaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository blRepo;
    @Autowired
    private ProjectTaskRepository ptRepo;

    @Autowired
    private ProjectRepository pRepo;

    public ProjectTask addProjectTask(String projectIdentified, ProjectTask task) {
        try {
            Backlog backlog = blRepo.findByProjectIdentified(projectIdentified);
            task.setBacklog(backlog);
            int backLogSequence = backlog.getProjectTaskSeq();
            backLogSequence++;
            backlog.setProjectTaskSeq(backLogSequence);

            task.setProjectSequence(projectIdentified + "-" + backLogSequence);
            task.setProjectIdentified(projectIdentified);

            if (task.getStatus() == "" || task.getStatus() == null) {
                task.setStatus("TO_DO");
            }
            if (task.getPriority() == null) {
                task.setPriority(3);
            }
            return ptRepo.save(task);
        } catch (Exception e) {
            throw new ProjectNotFoundException("Project not Found");
        }
    }

    public Iterable<ProjectTask> findBacklogById(String projectId) {
        Project project = pRepo.findByProjectIdentified(projectId);

        if (project == null) {
            throw new ProjectNotFoundException("Project with ID: '" + projectId + "' does not exist");
        }
        return ptRepo.findByProjectIdentifiedOrderByPriority(projectId);
    }

    public ProjectTask findPTByProjectSequence(String backlog_id, String pt_id) {
        Backlog backlog = blRepo.findByProjectIdentified(backlog_id);
        // make sure searching on the right backlog
        // make sure searching on an existing backlog
        if (backlog == null) {
            throw new ProjectNotFoundException("Project with ID: '" + backlog_id + "' does not exist");
        }

        ProjectTask task = ptRepo.findByProjectSequence(pt_id);
        // make sure task exists
        if (task == null) {
            throw new ProjectNotFoundException("Project Task '" + pt_id + "' not found");
        }
        // make sure that the backlog/project id in the path corresponds to the right
        // project
        if (!task.getProjectIdentified().equals(backlog_id)) {
            throw new ProjectNotFoundException(
                    "Project Task '" + pt_id + "' does not exist in project: '" + backlog_id);
        }
        return task;
    }

    public ProjectTask updateByProjectSequence(ProjectTask updatedProjectTask, String backlog_id, String pt_id) {
        ProjectTask task = findPTByProjectSequence(backlog_id, pt_id);
        task = updatedProjectTask;
        return ptRepo.save(task);
    }

    public void deletePTByProjectSequence(String backlog_id, String pt_id) {
        ProjectTask projectTask = findPTByProjectSequence(backlog_id, pt_id);
        ptRepo.delete(projectTask);
    }

}
