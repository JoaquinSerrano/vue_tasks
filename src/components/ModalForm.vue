<template>
  <b-modal
    id="my-modal"
    title="Añadir tarea"
    ok-title="Guardar"
    cancel-title="Cancelar"
    @ok="handleOk"
  >
    <div class="d-block">
      <b-form @submit.prevent="handleSubmit">
        <b-form-group
          id="input-group-1"
          label="Nombre Tarea"
          label-for="input-1"
          :class="{ 'has-error': this.$v.$error }"
        >
          <b-form-input
            id="input-1"
            type="text"
            required
            v-model="titleTask"
            :class="{ 'error-input': this.$v.titleTask.$error }"
          ></b-form-input>
          <template v-if="this.$v.titleTask.$error" slot="invalid-feedback"
            >Este campo es obligatorio</template
          >
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
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      titleTask: "",
      descriptionTask: "",
    };
  },
  validations: {
    titleTask: {
      required,
    },
    descriptionTask: {
      required,
    },
  },
  methods: {
    ...mapActions(["addTask"]),
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }

      const formData = {
        id: uuid_v4(),
        title: this.titleTask,
        description: this.descriptionTask,
        completed: false,
      };
      this.addTask(formData);
      this.titleTask = "";
      this.descriptionTask = "";

      this.$v.$reset();
      this.$nextTick(() => {
        this.$bvModal.hide("my-modal");
      });
    },
  },
};
</script>

<style lang="scss">
.has-error .invalid-feedback {
  display: block;
}
.has-error .error-input {
  border: 1px solid red;
}
</style>
