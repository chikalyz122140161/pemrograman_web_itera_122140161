  const form = document.getElementById('assignmentForm');
  const nameInput = document.getElementById('name');
  const courseInput = document.getElementById('course');
  const deadlineInput = document.getElementById('deadline');
  const errorEl = document.getElementById('error');
  const listEl = document.getElementById('assignmentList');
  const countEl = document.getElementById('count');
  const filterStatus = document.getElementById('filterStatus');
  const searchInput = document.getElementById('search');

  let assignments = JSON.parse(localStorage.getItem('assignments')) || [];
  let editId = null;
  let isEditing = false;

  function saveAssignments() {
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }

  function renderAssignments() {
    listEl.innerHTML = '';
    const searchText = searchInput.value.toLowerCase();
    const status = filterStatus.value;

    const filtered = assignments.filter(a => {
      const matchSearch = a.name.toLowerCase().includes(searchText) || a.course.toLowerCase().includes(searchText);
      const matchStatus = status === 'all' || (status === 'completed' ? a.completed : !a.completed);
      return matchSearch && matchStatus;
    });

    filtered.forEach(a => {
      const li = document.createElement('li');
      li.className = `assignment-item ${a.completed ? 'completed' : ''}`;

      const disabledClass = isEditing ? 'disabled' : '';

      li.innerHTML = `
        <div class="info">
          <strong>${a.name}</strong> (${a.course})<br>
          Deadline: ${a.deadline}
        </div>
        <div class="actions">
          <button class="${disabledClass}" title="${isEditing ? 'Disabled while editing' : ''}" 
            onclick="${!isEditing ? `toggleComplete('${a.id}')` : ''}" ${isEditing ? 'disabled' : ''}>
            ${a.completed ? 'Unmark' : 'Complete'}
          </button>
          <button class="${disabledClass}" title="${isEditing ? 'Disabled while editing' : ''}"
            onclick="${!isEditing ? `editAssignment('${a.id}')` : ''}" ${isEditing ? 'disabled' : ''}>
            Edit
          </button>
          <button class="${disabledClass}" title="${isEditing ? 'Disabled while editing' : ''}"
            onclick="${!isEditing ? `deleteAssignment('${a.id}')` : ''}" ${isEditing ? 'disabled' : ''}>
            Delete
          </button>
        </div>
      `;
      listEl.appendChild(li);
    });

    const pendingCount = assignments.filter(a => !a.completed).length;
    countEl.textContent = `Outstanding assignments: ${pendingCount}`;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const course = courseInput.value.trim();
    const deadline = deadlineInput.value;

    if (!name || !course || !deadline) {
      errorEl.textContent = 'Please fill in all fields and ensure deadline is valid.';
      return;
    }

    errorEl.textContent = '';

    if (editId) {
      const a = assignments.find(a => a.id === editId);
      if (a) {
        a.name = name;
        a.course = course;
        a.deadline = deadline;
      }
      editId = null;
      isEditing = false;
      form.querySelector('button[type="submit"]').textContent = 'Add';
    } else {
      const newAssignment = {
        id: Date.now().toString(),
        name,
        course,
        deadline,
        completed: false
      };
      assignments.push(newAssignment);
    }

    form.reset();
    saveAssignments();
    renderAssignments();
  });

  function toggleComplete(id) {
    if (isEditing) return;
    const a = assignments.find(a => a.id === id);
    if (a) a.completed = !a.completed;
    saveAssignments();
    renderAssignments();
  }

  function editAssignment(id) {
    const a = assignments.find(a => a.id === id);
    if (!a) return;
    nameInput.value = a.name;
    courseInput.value = a.course;
    deadlineInput.value = a.deadline;
    editId = id;
    isEditing = true;
    form.querySelector('button[type="submit"]').textContent = 'Save';
    renderAssignments();
  }

  function deleteAssignment(id) {
    if (isEditing) return;
    assignments = assignments.filter(a => a.id !== id);
    saveAssignments();
    renderAssignments();
  }

  filterStatus.addEventListener('change', renderAssignments);
  searchInput.addEventListener('input', renderAssignments);

  renderAssignments();
