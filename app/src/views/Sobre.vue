<template>
  <div class="container mt-2">
    <h1>oiiii</h1>
    <b-form>
      <b-form-group label="Titulo" label-for="subject">
        <b-form-input
          id="subject"
          v-model="form.subject"
          type="text"
          placeholder="Titulo"
          required
          autocomplete="off"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Descrição" label-for="description">
        <b-form-textarea
          id="description"
          v-model="form.description"
          type="text"
          placeholder="Descrição completa"
          required
          autocomplete="off"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="outline-primary" @click="saveTask"
        >Salvar</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Sobre",

  data() {
    return {
      form: {
        subject: "",
        description: "",
      },
      methodSave: "new",
    };
  },

  created() {
    if (
      this.$route.params.index === 0 ||
      this.$route.params.index !== undefined
    ) {
      this.methodSave = "update";
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      this.form = tasks[this.$route.params.index];
    }
  },

  methods: {
    saveTask() {
      let tasks = localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];
      tasks.push(this.form);
      localStorage.setItem("tasks", JSON.stringfy(tasks));
      this.$router.push({ name: "list" });
    },
  },
};
</script>s

<style>
</style>



