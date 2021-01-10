import state from "./state";

export function completedTasks() {
  if (state.searchedTask.length > 2) {
    return state.tasks.filter(
      (task) =>
        task.completed === true &&
        task.title.toLowerCase().includes(state.searchedTask)
    );
  }
  return state.tasks.filter((task) => task.completed === true);
}

export function inCompletedTasks() {
  if (state.searchedTask.length > 2) {
    return state.tasks.filter(
      (task) =>
        task.completed === false &&
        task.title.toLowerCase().includes(state.searchedTask)
    );
  }
  return state.tasks.filter((task) => task.completed === false);
}
