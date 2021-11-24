<template>
  <div id="app" class="container mt-3">
    <h3>Dados Pessoais</h3>
    <hr />

    <b-form>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome: " label-for="nome">
            <b-form-input
              v-model="form.nome"
              id="nome"
              placeholder="Nome Completo"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="EMAIL: " label-for="email">
            <b-form-input
              v-model="form.email"
              id="email"
              placeholder="Digite com seu email"
            >
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <h3>Dados Endereço</h3>
      <hr />
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Cidade: " label-form="cidade">
          <b-form-input
              v-model="form.cidade"
              id="cidade"
              placeholder="Nome Cidade"
            >
           </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
         <b-form-group label="Estado: " label-form="estado">
         <b-form-input
              v-model="form.estado"
              id="estado"
              placeholder="Nome Estado"
            >
           </b-form-group>
            </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      form: {
        nome: "",
        email: "",
        cidade: "",
        estado: "",
      },
    };
  },
};
</script>

<style>
</style>