document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  class Todo {
    constructor(text) {
      this.id = Date.now();
      this.text = text;
      this.completed = false;
    }
  }

  // LocalStorage helpers
  const getTodos = () => JSON.parse(localStorage.getItem('todos')) || [];
  const saveTodos = todos => localStorage.setItem('todos', JSON.stringify(todos));

  // Render todos
  const renderTodos = () => {
    todoList.innerHTML = '';
    const todos = getTodos();

    todos.forEach(todo => {
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = todo.text;
      if(todo.completed) span.classList.add('completed');
      span.addEventListener('click', () => toggleComplete(todo.id));

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => editTodo(todo.id));

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Hapus';
      deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    });
  };

  // CRUD functions
  const addTodo = text => {
    const todos = getTodos();
    todos.push(new Todo(text));
    saveTodos(todos);
    renderTodos();
  };

  const editTodo = id => {
    const todos = getTodos();
    const todo = todos.find(t => t.id === id);
    const newText = prompt('Edit tugas:', todo.text);
    if(newText !== null && newText.trim() !== '') {
      todo.text = newText.trim();
      saveTodos(todos);
      renderTodos();
    }
  };

  const deleteTodo = id => {
    let todos = getTodos();
    todos = todos.filter(t => t.id !== id);
    saveTodos(todos);
    renderTodos();
  };

  const toggleComplete = id => {
    const todos = getTodos();
    const todo = todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    saveTodos(todos);
    renderTodos();
  };

  // Handle form submit
  todoForm.addEventListener('submit', e => {
    e.preventDefault(); // prevent page reload
    const text = todoInput.value.trim();
    if(text === '') return;
    addTodo(text);
    todoInput.value = '';
  });

  // Initial render
  renderTodos();
});

