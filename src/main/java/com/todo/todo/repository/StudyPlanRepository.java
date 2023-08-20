package com.todo.todo.repository;

import com.todo.todo.models.Plan;
import com.todo.todo.models.StudyPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudyPlanRepository extends JpaRepository<StudyPlan,Long> {
    boolean existsByName(String name);

    Optional<StudyPlan> findByName(String math);
}
