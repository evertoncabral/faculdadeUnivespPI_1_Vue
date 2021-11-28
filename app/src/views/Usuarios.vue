<template>
  <div id="Usuarios" class="container mt-2">
    <div class="mb-8 d-flex justify-contente-center mb-8">
      <b-avatar> </b-avatar>
      <b-avatar> </b-avatar>
      <b-avatar> </b-avatar>
      <b-avatar> </b-avatar>
      <b-avatar> </b-avatar>
      <b-avatar> </b-avatar>
      <b-avatar> </b-avatar>
      <b-avatar> </b-avatar>
    </div>

    <div class="mb-8 d-flex justify-contente-right mb-8">
      <b-avatar
        src="https://cdn.pixabay.com/photo/2017/07/25/10/37/woman-2537564_960_720.jpg"
        text="ES"
      >
      </b-avatar>

      <b-avatar
        mt-2
        src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg"
        text="ES"
      >
      </b-avatar>

      <b-avatar
        mt-2
        src="https://cdn.pixabay.com/photo/2017/07/25/10/37/woman-2537564_960_720.jpg"
        text="ES"
      >
      </b-avatar>
      <b-avatar
        src="https://cdn.pixabay.com/photo/2015/07/20/13/01/fred-852770_960_720.jpg"
        text="ES"
      >
      </b-avatar>
      <b-avatar
        src="https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_960_720.jpg"
        text="ES"
      >
      </b-avatar>
      <b-avatar
        src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419_960_720.jpg"
        text="ES"
      >
      </b-avatar>
      <b-avatar
        src="https://cdn.pixabay.com/photo/2016/08/13/23/33/smile-1591798_960_720.jpg"
        text="ES"
      >
      </b-avatar>
      <b-avatar src="" text="ES"> </b-avatar>
    </div>

    <br />

    <h1 class="jumbotron">{{ message }}</h1>
    <div class="col-2">
      <label>Nome</label>
      <input v-model="contact.name" />

      <label>Telefone</label>
      <input type="number" v-model="contact.telephone" />
      <label>Função</label>
      <input type="text" v-model="contact.funcao"  placeholder="Aluno / Professor"/>
      <label>Relacionamento</label>
      <input type="text" v-model="contact.relacionamento" placeholder="Aluno de: " />

      <button class="mt-3 mb-3 btn btn-primary" @click="add()">
        Adicionar
      </button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col">Função</th>
            <th scope="col">Relacionamento</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.telephone }}</td>
          <td>{{ item.funcao }}</td>
            <td>{{ item.relacionamento }}</td>
          <td>
            <button @click="edit(item)" class="btn btn-info">Editar</button>
            <button @click="remove(item)" class="btn btn-danger">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Usuarios",
  data() {
    return {
      message: "Adicione seu usuário e sua função",
      contact: {
        id: 0,
        name: null,
        telephone: null,
        funcao: null,
        relacionamento:null,
      },
      index: null,
      list: [],
    };
  },

  methods: {
    add() {
      if (this.contact.id === 0) {
        this.contact.id = this.list.length + 1;
        this.list.push(this.contact);
      } else {
        this.list[this.index] = this.contact;
      }
      localStorage.setItem("contacts", JSON.stringify(this.list));
      this.contact = { id: 0, name: null, telephone: null };
    },

    remove(item) {
      const idx = this.list.indexOf(item);
      this.list.splice(idx, 1);
      localStorage.setItem("contacts", JSON.stringify(this.list));
    },

    edit(item) {
      this.index = this.list.indexOf(item);
      this.contact = Object.assign({}, item);
      localStorage.setItem("contacts", JSON.stringify(this.list));
    },
  },

  mounted() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    this.list = contacts ? contacts : [];
  },
};
</script>