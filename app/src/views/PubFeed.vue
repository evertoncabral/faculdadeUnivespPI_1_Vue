<template>
  <div class="container mt-2">
    <b-form>
      <b-form-group label="Titulo" label-for="subject1">
        <b-form-input
          id="subject1"
          v-model="form1.subject1"
          type="text"
          placeholder="Ex: Nome do Evento"
          required
          autocomplete="off"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Descrição" label-for="description1">
        <b-form-textarea
          id="description1"
          v-model="form1.description1"
          type="text"
          placeholder="Ex: Escreva algo que esta pensando no momento..."
          required
          autocomplete="off"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="outline-primary" @click="saveTask1">
        Salvar
      </b-button>
    </b-form>
  </div>
</template>

<script>
import ToastMixin from "@/mixins/toastMixin.js";

export default {
  name: "PubFeed",

  mixins: [ToastMixin],

  data() {
    return {
      form1: {
        subject1: "",
        description1: "",
      },
      methodSave1: "new",
    };
  },

  created() {
    if (
      this.$route.params.index === 0 ||
      this.$route.params.index !== undefined
    ) {
      this.methodSave1 = "update";
      let tasks1 = JSON.parse(localStorage.getItem("tasks1"));
      this.form1 = tasks1[this.$route.params.index];
    }
  },

  methods: {
    saveTask1() {
      if (this.methodSave1 === "update") {
        let tasks1 = JSON.parse(localStorage.getItem("tasks1"));
        tasks1[this.$route.params.index] = this.form1;
        localStorage.setItem("tasks1", JSON.stringify(tasks1));
        this.showToast("success", "Sucesso!", "Tarefa atualizada com suceso");
        this.$router.push({ name: "Feed" });
        return;
      }

      let tasks1 = localStorage.getItem("tasks1")
        ? JSON.parse(localStorage.getItem("tasks1"))
        : [];
      tasks1.push(this.form1);
      localStorage.setItem("tasks1", JSON.stringify(tasks1));
      this.showToast("success", "Sucesso!", "Tarefa criada com suceso");
      this.$router.push({ name: "Feed" });
    },
  },
};
</script>
