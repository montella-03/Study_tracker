package com.todo.todo.models;

public record Plan(String name, String description, String status,
                   String startDate, String endDate) {
}
