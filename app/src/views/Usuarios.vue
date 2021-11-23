<template>
  <div id="usuario">
    <b-table sticky-header striped hover :itens="itens" :fields="fields">
        <template v-slot:cell(actions)="data">
        <b-button variant="primary" size="sm" @click="editar(data.id)">Editar</b-button>
        <b-button variant="danger"  size="sm"  @click="deletar(data.id)">Remover</b-button>
        
        </template>

    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itens: [
        {
          id: 1,
          nome: "João Souza",
          idade: 20,
          cidade: Itupeva,
        },
        {
          id: 2,
          nome: "Carlos Paiva",
          idade: 29,
          cidade: Cabreúva,
        },
        {
          id: 3,
          nome: "Maria Carla",
          idade: 30,
          cidade: Louveira,
        },
        {
          id: 4,
          nome: "Diego Ferreira",
          idade: 17,
          cidade: Jundiaí,
        },
        {
          id: 5,
          nome: "Renato Santos",
          idade: 22,
          cidade: Itupeva,
        },
        {
          id: 6,
          nome: "Everton Silva",
          idade: 31,
          cidade: Jundiaí,
        },
      ],
      fields: [
        {
          key: "id",
          label: "id",
           sortable:true,
        },
        {
          key: "nome",
          label: "nome",
           sortable:true,
        },
        {
          key: "idade",
          label: "idade",
           sortable:true,
        },
        {
          key: "cidade",
          label: "cidade",
          sortable:true,
        },
        {
          key: "actions",
          label: "ações",
      
        },
      ],
    };
  },
};
</script>