<template>
  <div id="app">
    <Header />
    <Filtro />
    <Main />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "@/layouts/Header";
import Filtro from "@/layouts/Filter";
import Main from "@/layouts/Main";
export default {
  name: "App",
  components: {
    Header,
    Filtro,
    Main,
  },
  created() {
    this.getTasks();
  },
  methods: {
    ...mapActions(["getTasks"]),
  },
};
</script>

<style lang="scss">
.modal-header {
  background-color: white;
}
</style>
