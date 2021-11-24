<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <b-button variant="dark" size="sm" v-b-toggle.sidebar-no-header>
          <b-icon icon="list"></b-icon>
        </b-button>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        
            <b-nav-form>
              <b-form-input 
                size="sm"
                class="mr-sm-2"
                placeholder="Busca"
              ></b-form-input>
              <b-button pill size="sm" class="my-2 my-sm-0" type="submit"
                >Pesquisar</b-button
              >
            </b-nav-form>
        


          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Usuário Everton Logado </em>
            </template>
            <b-dropdown-item href="#">Alterar Pefil</b-dropdown-item>
            <b-dropdown-item href="#">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
           
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script >



<style scoped>
</style>
