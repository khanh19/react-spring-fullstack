package com.example.backend.repository;

import java.util.List;

import com.example.backend.domain.ProjectTask;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {
    List<ProjectTask> findByProjectIdentifiedOrderByPriority(String projectId);

    ProjectTask findByProjectSequence(String projectSequence);
}
