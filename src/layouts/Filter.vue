<template>
  <b-container>
    <b-row class="mt-5">
      <b-col class="filter-wrapper">
        <div class="filter-wrapper__form">
          <b-form-input
            placeholder="Buscar Tarea"
            @input="SEARCH_TASK($event)"
          ></b-form-input>
        </div>

        <div class="button-group">
          <b-button variant="primary" v-b-modal.my-modal>
            <b-icon icon="clipboard-plus"></b-icon>
            Nueva Tarea
          </b-button>
          <b-button variant="danger" @click="handleRemoveTask">
            <b-icon icon="x-circle"></b-icon>
            Eliminar todas las tareas
          </b-button>
        </div>
      </b-col>
    </b-row>
    <modal-form></modal-form>
    <b-modal ref="mi-modal" @ok="handleOk"
      >¿Seguro que quieres eliminar todas las tareas?</b-modal
    >
  </b-container>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import ModalForm from "@/components/ModalForm";
export default {
  components: {
    ModalForm,
  },
  methods: {
    ...mapMutations(["SEARCH_TASK"]),
    ...mapActions(["removeAllTasks"]),
    handleRemoveTask() {
      this.$refs["mi-modal"].show();
    },
    handleOk() {
      this.removeAllTasks();
    },
  },
};
</script>

<style>
.filter-wrapper {
  display: flex;
  justify-content: space-between;
}
.filter-wrapper__form {
  width: 40%;
}
.btn {
  margin-left: 20px;
}
</style>
