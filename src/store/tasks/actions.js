import Localbase from "localbase";
let TasksDB = new Localbase("TasksDB");

export async function getTasks({ commit }) {
  try {
    let tasksList = await TasksDB.collection("tasks").get();
    commit("GET_TASK", tasksList);
  } catch (error) {
    console.log(error);
  }
}

export async function addTask({ commit }, newTask) {
  await TasksDB.collection("tasks").add(newTask);
  commit("ADD_TASK", newTask);
}

export async function changeState({ state, dispatch }, idTask) {
  let task = state.tasks.filter((task) => task.id === idTask);
  console.log(task[0].completed);
  await TasksDB.collection("tasks")
    .doc({ id: idTask })
    .update({
      completed: !task[0].completed,
    });
  dispatch("getTasks");
}

export async function removeTask({ commit }, idTask) {
  await TasksDB.collection("tasks")
    .doc({ id: idTask })
    .delete();
  commit("REMOVE_TASK", idTask);
}

export async function removeAllTasks({ dispatch }) {
  await TasksDB.collection("tasks").delete();
  dispatch("getTasks");
}
