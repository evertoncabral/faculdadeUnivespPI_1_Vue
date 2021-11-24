<template>

  <div id="Usuarios" class="container mt-3">
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <h1>oiiii 3</h1>
    <b-form inline>
      <b-form-input class="mr-3" placeholder="Buscar" v-model="search">
      </b-form-input>

      <b-button title="Limpar Filtro" v-b-tooltip.hover></b-button>
    </b-form>

    <b-table sticky-header striped hover :itens="itens" :fields="fields">
      <template v-slot:cell(actions)="data">
        <b-button variant="primary" size="sm" @click="editar(data.id)"
          >Editar</b-button
        >
        <b-button variant="danger" size="sm" @click="deletar(data.id)"
          >Remover</b-button
        >
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "Usuarios",
  data() {
    return {
      itens: [
        {
          id: 1,
          nome: "João Souza",
          idade: 20,
          cidade: "Itupeva",
        },
        {
          id: 2,
          nome: "Carlos Paiva",
          idade: 29,
          cidade: "Cabreúva",
        },
        {
          id: 3,
          nome: "Maria Carla",
          idade: 30,
          cidade: "Louveira",
        },
        {
          id: 4,
          nome: "Diego Ferreira",
          idade: 17,
          cidade: "Jundiaí",
        },
        {
          id: 5,
          nome: "Renato Santos",
          idade: 22,
          cidade: "Itupeva",
        },
        {
          id: 6,
          nome: "Everton Silva",
          idade: 31,
          cidade: "Jundiaí",
        },
      ],
      fields: [
        {
          key: "id",
          label: "id",
          sortable: true,
        },
        {
          key: "nome",
          label: "nome",
          sortable: true,
        },
        {
          key: "idade",
          label: "idade",
          sortable: true,
        },
        {
          key: "cidade",
          label: "cidade",
          sortable: true,
        },
        {
          key: "actions",
          label: "ações",
        },
      ],
      search: "",
      selected: null,
    };
  },
  computed: {
    itemsFiltered() {
      let valores = [];

      valores = this.itens.filter((item) => {
        return item.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
        item.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1||
        item.cidade.toLowerCase().indexOf(this.search.toLowerCase()) > -1
      });
      return valores;
    },
  },
  methods: {
    limparFiltro() {
      this.search = "";
      this.selected = null;
    },
  },
};
</script>