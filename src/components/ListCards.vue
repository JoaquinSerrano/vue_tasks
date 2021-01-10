<template>
  <div>
    <h2>{{ title }}</h2>
    <card
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @handleRemoveTask="handleRemoveTask"
    ></card>

    <b-modal ref="mi-modal" @ok="handleOk"
      >¿Seguro que quieres eliminar esta tarea?</b-modal
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Card from "@/components/Card";
export default {
  components: {
    Card,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      idTaskToRemove: null,
    };
  },
  methods: {
    ...mapActions(["removeTask"]),

    handleRemoveTask(id) {
      this.$refs["mi-modal"].show();
      this.idTaskToRemove = id;
    },
    handleOk() {
      this.removeTask(this.idTaskToRemove);
    },
  },
};
</script>

<style></style>
