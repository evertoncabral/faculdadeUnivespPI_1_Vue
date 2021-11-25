<template>
  <div class="container mt-2">
    <!-- <b-form inline class="mb-2">
      <b-form-input
        v-model="filter.subject"
        id="subject"
        placeholder=" Pesquise o evento"
        class="mr-2"
        autocomplete="off"
      >
      </b-form-input>

      <b-button variant="outline-secondary" v-model="search" class="mr-2"
        >Buscar</b-button
      >
    </b-form> -->

    <template v-if="isTasksEmpty">
      <div class="empty-data mt-2">
        <img src="../assets/images/empty-data.svg" class="empty-data-image" />
        <b-button variant="outline-primary" class="mt-2" size="lg" to="/form">
          Publicar Evento
        </b-button>
      </div>
    </template>
    <template v-else>
      <div v-for="(task, index) in tasks" :key="index">
        <b-card :title="task.subject" class="mb-2">
          <b-card-text>{{ task.description }}</b-card-text>

          <b-button
            variant="outline-secondary"
            class="mr-2"
            @click="edit(index)"
          >
            Editar
          </b-button>
          <b-button
            variant="outline-danger"
            class="mr-2"
            @click="remove(task, index)"
          >
            Excluir
          </b-button>
        </b-card>
      </div>
    </template>

    <b-modal ref="modalRemove" hide-footer title="Exclusão de tarefa">
      <div class="d-block text-center">
        Deseja realmente excluir essa tarefa? {{ taskSelected.subject }}
      </div>
      <div class="mt-3 d-flex justify-content-end">
        <b-button variant="outline-secondary" class="mr-2" @click="hideModal">
          Cancelar
        </b-button>
        <b-button
          variant="outline-danger"
          class="mr-2"
          @click="confirmRemoveTask"
        >
          Excluir
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "List",

  data() {
    return {
      tasks: [],
      taskSelected: [],
      // filter: {
      //   subject: "",
      // },
    };
    // search: "";
  },

  created() {
    this.tasks = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
  },

  methods: {
    edit(index) {
      this.$router.push({ name: "form", params: { index } });
    },

    remove(task, index) {
      this.taskSelected = task;
      this.taskSelected.index = index;
      this.$refs.modalRemove.show();
    },

    hideModal() {
      this.$refs.modalRemove.hide();
    },

    confirmRemoveTask() {
      this.tasks.splice(this.taskSelected.index, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.hideModal();
    },

    // filterTasks(){
    //   let valores = [];

    //   valores = this.itens.filter((item) => {
    //     return (
    //       taskSelected.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
    //       item.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
    //       item.cidade.toLowerCase().indexOf(this.search.toLowerCase()) > -1
    //     );

    // let filter = this.clean(this.filter);
    // this.tasks = await TasksM

    // },

    // 888
    //  let valores = [];

    //       valores = this.itens.filter((item) => {
    //         return (
    //           item.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
    //           item.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
    //           item.cidade.toLowerCase().indexOf(this.search.toLowerCase()) > -1
    //         );
    //       });
    //       return valores;
    // 8888

    // clean(obj){
    //   for (var propName in obj){
    //     if (obj[propName] === null ||obj[propName] === undefined){
    //       delete obj[propName];
    //     }
    //   }
    //   return obj;
    // }
  },

  computed: {
    isTasksEmpty() {
      return this.tasks.length === 0;
    },
  },
};
</script>

<style scoped>
.empty-data {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.empty-data-image {
  width: 300px;
  height: 300px;
}
</style>
