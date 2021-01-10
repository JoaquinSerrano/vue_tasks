<template>
  <div>
    <b-card
      :title="task.title"
      :class="taskClass"
      class="mt-3 position-relative"
    >
      <b-card-text v-if="showDescription">
        {{ task.description }}
      </b-card-text>
      <a
        href="#"
        class="card-link"
        @click="showDescription = !showDescription"
        >{{ linkOne }}</a
      >
      <b-link href="#" class="card-link" @click="changeState(task.id)">{{
        linkTwo
      }}</b-link>
      <span class="position-absolute h5" @click="removeTask(task.id)">
        <b-icon
          icon="x-circle"
          variant="light"
          class="rounded-circle bg-danger"
        ></b-icon>
      </span>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    task: {
      type: Object,
      requred: true,
      default: () => {},
    },
  },
  data() {
    return {
      showDescription: false,
    };
  },
  computed: {
    taskClass() {
      return this.task.completed === true
        ? "task-item-completed"
        : "task-item-uncompleted";
    },
    linkOne() {
      return this.showDescription === false ? "Ver más" : "Ver menos";
    },
    linkTwo() {
      return this.task.completed === false ? "Terminada" : "Volver";
    },
  },
  methods: {
    ...mapActions(["changeState"]),
    removeTask(id) {
      this.$emit("handleRemoveTask", id);
    },
  },
};
</script>

<style scoped>
span {
  top: 15px;
  right: 15px;
}
.task-item-uncompleted {
  border-top: 3px solid orange;
}
.task-item-completed {
  border-top: 3px solid green;
}
</style>
