package com.example.backend.repository;

import com.example.backend.domain.Backlog;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog, Long> {
    Backlog findByProjectIdentified(String projectIdentified);
}
