package com.todo.todo.services;

import com.todo.todo.models.Plan;
import com.todo.todo.models.StudyPlan;

public interface StudyPlanService {
    StudyPlan savePlan(Plan plan);
    StudyPlan createPlan(Plan plan);
    StudyPlan updatePlan(Plan plan);
    StudyPlan getPlan(Long id);
    void deletePlan(Long id);

}
