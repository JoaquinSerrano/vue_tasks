<template>
  <b-container>
    <b-row align-h="between" class="mt-5">
      <b-col md="5">
        <ListCards title="Tareas Pendientes" :tasks="inCompletedTasks" />
      </b-col>
      <b-col md="5">
        <ListCards title="Tareas Realizadas" :tasks="completedTasks" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import ListCards from "@/components/ListCards";
export default {
  components: {
    ListCards,
  },
  computed: {
    ...mapGetters(["completedTasks", "inCompletedTasks"]),
  },
};
</script>

<style></style>
