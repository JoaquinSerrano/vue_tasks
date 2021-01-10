export function GET_TASK(state, tasksList) {
  state.tasks = tasksList;
}

export function ADD_TASK(state, newTask) {
  state.tasks.push(newTask);
}

export function REMOVE_TASK(state, idTask) {
  state.tasks = state.tasks.filter((task) => task.id !== idTask);
}

export function SEARCH_TASK(state, searchText) {
  state.searchedTask = searchText;
}
