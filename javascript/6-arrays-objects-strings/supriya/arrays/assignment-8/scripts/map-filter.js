function generate() {
  const input = document.getElementById("taskInput").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  try {
    const tasks = JSON.parse(input);

    function getCompletedTasks(tasksArray) {
      return tasksArray
        .filter(task => task.completed)
        .map(task => task.task);
    }

    const completedTaskNames = getCompletedTasks(tasks);

    if (completedTaskNames.length === 0) {
      resultsDiv.textContent = "No completed tasks found.";
    } else {
      resultsDiv.innerHTML = completedTaskNames.map(name => `${name}`).join(",");
    }

  } catch (error) {
    resultsDiv.textContent = "Invalid JSON format. Use double quotes for keys and string values.";
  }
}