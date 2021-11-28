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

    <template v-if="isTasksEmpty1">
      <div class="empty-data mt-2">
        <img src="../assets/images/empty-data.svg" class="empty-data-image" />
        <b-button
          variant="outline-primary"
          class="mt-2"
          size="lg"
          to="/pubFeed"
        >
          Publicar Feed
        </b-button>
      </div>
    </template>
    <template v-else>
      <div v-for="(task1, index) in tasks1" :key="index">
        <b-card :title="task1.subject1" class="mb-2">
          <b-card-text>{{ taskSelected1.description1 }}</b-card-text>

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
            @click="remove(task1, index)"
          >
            Excluir
          </b-button>
        </b-card>
      </div>
    </template>

    <b-modal ref="modalRemove" hide-footer title="Exclusão de tarefa">
      <div class="d-block text-center">
        Deseja realmente excluir essa tarefa? {{ taskSelected1.subject1 }}
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
  name: "Feed",

  data() {
    return {
      tasks1: [],
      taskSelected1: [],
      // filter: {
      //   subject: "",
      // },
    };
    // search: "";
  },

  created() {
    this.tasks1 = localStorage.getItem("tasks1")
      ? JSON.parse(localStorage.getItem("tasks1"))
      : [];
  },

  methods: {
    edit(index) {
      this.$router.push({ name: "Feed", params: { index } });
    },

    remove(task1, index) {
      this.taskSelected1 = task1;
      this.taskSelected1.index = index;
      this.$refs.modalRemove.show();
    },

    hideModal() {
      this.$refs.modalRemove.hide();
    },

    confirmRemoveTask() {
      this.tasks1.splice(this.taskSelected1.index, 1);
      localStorage.setItem("tasks1", JSON.stringify(this.tasks1));
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
    isTasksEmpty1() {
      return this.tasks1.length === 0;
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
