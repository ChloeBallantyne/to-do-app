package io.ballantyne.todo.todoitem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class TodoItemService {
    @Autowired
    private TodoItemRepository repo;

    public List<TodoItem> listAll() {
        return repo.findAll();
    }

    public void save(TodoItem todoItem) {
        repo.save(todoItem);
    }

    public TodoItem get(Long id) {
        return repo.findById(id).get();
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public void toggleComplete(Long id) {
        TodoItem todoItem = repo.findById(id).get();
        todoItem.setCompleted(!todoItem.isCompleted());
        repo.save(todoItem);
    }
}
