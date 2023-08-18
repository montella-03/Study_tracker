package com.todo.todo.services;

import com.todo.todo.models.Plan;
import com.todo.todo.models.StudyPlan;
import com.todo.todo.repository.StudyPlanRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
public class StudyPlanImpl implements StudyPlanService{
    private final StudyPlanRepository studyPlanRepository;
    private final ModelMapper modelMapper;

    public StudyPlanImpl(StudyPlanRepository studyPlanRepository, ModelMapper modelMapper) {
        this.studyPlanRepository = studyPlanRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public StudyPlan savePlan(Plan plan) {
       return studyPlanRepository.save(modelMapper.map(plan,StudyPlan.class));
    }

    @Override
    public StudyPlan createPlan(Plan plan) {
        return null;
    }

    @Override
    public StudyPlan updatePlan(Plan plan) {
        if(studyPlanRepository.existsByName(plan.name()))
            return studyPlanRepository.save(modelMapper.map(plan,StudyPlan.class));
        else throw new RuntimeException("Plan does not exist");
    }

    @Override
    public StudyPlan getPlan(Long id) {

        return studyPlanRepository.findById(id).orElseThrow(()->new RuntimeException("Plan does not exist"));
    }

    @Override
    public void deletePlan(Long id) {
        studyPlanRepository.deleteById(id);

    }
}
