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
    </b-form>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      form: {
        nome,
        email,
      },
    };
  },
};
</script>

<style>
</style>