package com.todo.todo.Endpoints;

import com.todo.todo.Todo;
import com.todo.todo.TodoRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;

import java.util.List;

@Endpoint
@AnonymousAllowed
public class TodoEndpoint {
    private TodoRepository repository;

    TodoEndpoint(TodoRepository repository) {
        this.repository = repository;
    }

    public List<Todo> findAll() {
        return repository.findAll();
    }

    public Todo add(String task) {
        return repository.save(new Todo(task));
    }

    public Todo update(Todo todo) {
        return repository.save(todo);
    }
}
