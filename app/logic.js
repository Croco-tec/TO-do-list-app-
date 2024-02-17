function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const placeholder = document.querySelector('.placeholder');

    if (taskInput.value.trim() === '') {
      alert('Please enter a task');
      return;
    }

    if (placeholder) {
      placeholder.style.fontSize = '1em'; // Change font size back to original
      placeholder.remove();
    }

    const li = createTaskElement(taskInput.value);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear the input field
  }

  function createTaskElement(taskText) {
    const li = document.createElement('li');
    const taskTextNode = document.createTextNode(taskText);
    li.appendChild(taskTextNode);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.className = 'deleteButton';
    deleteButton.onclick = function() {
      li.remove();
    };

    li.appendChild(deleteButton);

    return li;
  }

  // Add event listener for "Enter" key press
  document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
