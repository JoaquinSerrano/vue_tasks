<template>
  <b-modal
    id="my-modal"
    title="Añadir tarea"
    ok-title="Guardar"
    cancel-title="Cancelar"
    @ok="handleOk"
  >
    <div class="d-block">
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Nombre Tarea"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="text"
            required
            v-model="titleTask"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Descripción" label-for="textarea">
          <b-form-textarea
            id="textarea"
            placeholder="Descripción de la tarea..."
            rows="3"
            max-rows="6"
            v-model="descriptionTask"
          ></b-form-textarea>
        </b-form-group>
      </b-form>
    </div>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";
import { v4 as uuid_v4 } from "uuid";
export default {
  data() {
    return {
      titleTask: "",
      descriptionTask: "",
    };
  },
  methods: {
    ...mapActions(["addTask"]),
    handleOk() {
      const formData = {
        id: uuid_v4(),
        title: this.titleTask,
        description: this.descriptionTask,
        completed: false,
      };
      this.addTask(formData);
    },
  },
};
</script>

<style scoped lang="scss"></style>
