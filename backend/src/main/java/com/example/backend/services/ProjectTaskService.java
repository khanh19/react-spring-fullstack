package com.example.backend.services;

import com.example.backend.domain.Backlog;
import com.example.backend.domain.ProjectTask;
import com.example.backend.repository.BacklogRepository;
import com.example.backend.repository.ProjectTaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository blRepo;
    @Autowired
    private ProjectTaskRepository ptRepo;

    public ProjectTask addProjectTask(String projectIdentified, ProjectTask task) {
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
    }

}
