package com.example.backend.repository;

import com.example.backend.domain.Project;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long>{
    
    Project findByProjectIdentified(String projectId);
    @Override
    Iterable<Project> findAll();

}
