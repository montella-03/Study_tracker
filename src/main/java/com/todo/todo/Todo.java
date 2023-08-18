package com.todo.todo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    private String task;
    private boolean done;

    public Todo() {
    }

    public Todo(String task) {
        this.task = task;
    }

    public Todo(Long id, String task, boolean done) {
        this.id = id;
        this.task = task;
        this.done = done;
    }

    public Long getId() {
        return id;
    }

    public String getTask() {
        return task;
    }

    public boolean isDone() {
        return done;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public void setDone(boolean done) {
        this.done = done;
    }
}
