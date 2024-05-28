package io.ballantyne.todo.todoitem;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/todos")
public class TodoItemController {

    @Autowired
    private TodoItemService service;

    @GetMapping()
    public List<TodoItem> list() {
        return service.listAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<TodoItem> get(@PathVariable Long id) {
        try {
            TodoItem todoItem = service.get(id);
            return new ResponseEntity<TodoItem>(todoItem, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<TodoItem>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping()
    public void add(@RequestBody TodoItem todoItem) { 
        service.save(todoItem);
    }
    @PatchMapping("/{id}")
    public ResponseEntity<?> toggleComplete(@PathVariable Long id) {
        try {
            service.toggleComplete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody TodoItem todoItem, @PathVariable Long id) {
        try {
            TodoItem existingTodoItem = service.get(id);
            existingTodoItem.setItem(todoItem.getItem());
            service.save(existingTodoItem);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            service.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    

}
