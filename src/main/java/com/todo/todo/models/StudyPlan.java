package com.todo.todo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudyPlan {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private String status;
    private Instant startDate;
    private Instant endDate;
}
