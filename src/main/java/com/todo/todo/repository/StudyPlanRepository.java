package com.todo.todo.repository;

import com.todo.todo.models.StudyPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudyPlanRepository extends JpaRepository<StudyPlan,Long> {
    boolean existsByName(String name);
}
