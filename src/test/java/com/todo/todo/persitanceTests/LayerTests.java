//package com.todo.todo.persitanceTests;
//
//import com.todo.todo.models.Plan;
//import com.todo.todo.services.StudyPlanService;
//import org.junit.jupiter.api.Test;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import java.time.Instant;
//
//@SpringBootTest
//public class LayerTests {
//    private final StudyPlanService studyPlanService;
//
//    public LayerTests(StudyPlanService studyPlanService) {
//        this.studyPlanService = studyPlanService;
//    }
//    @Test
//
//    public void checkIfPlanIsSaved() {
//        Instant start = Instant.now();
//        Instant end = Instant.now();
//        Plan plan = new Plan("math","studying math","Done",start.toString(), end.toString());
//        studyPlanService.savePlan(plan);
//        assert studyPlanService.getPlanByName("math").getName().equals("math");
//    }
//}
