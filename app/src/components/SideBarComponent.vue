<template>
  <div id="app">
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
      bg-variant="dark"
      text-variant="light"
      backdrop backdrop-varian="dark"
    >
      <template v-slot:default="{ hide }">
        <div class="p-3">
          <div class="d-flex align-items-center flex-column">
          <b-avatar
            variant="primary"
            text="PS"
            class="mb-3 mt-3"
            size="5rem"
          ></b-avatar>
          
            <h4 id="sidebar-no-header-title">
             <br />
              Rede de Relacionamento Cristã do Brasil
            </h4>
            <div class="divider-menu"></div>
          </div>
          <br />
          <br />
         
          <p>SEJA BEM VINDO</p>
           <br />
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active :href="/Usuarios/" @click="hide">
                <b-icon icon="person" to="/usuario"  ></b-icon> Lista Usuários </b-nav-item
              >
              
              <b-nav-item :href='/Sobre/' @click="hide"
                ><b-icon icon="book"></b-icon> Fale Conosco</b-nav-item
              >
              <b-nav-item :href='/Eventos/' @click="hide">
                <b-icon icon="emoji-sunglasses"></b-icon> Eventos Publicados </b-nav-item
              >
              <b-nav-item to="/form" @click="hide" >
              <b-icon icon="emoji-sunglasses"></b-icon> Publicar Evento</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">FECHAR</b-button>
          <router-view/>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SideBarComponent",
};
</script >


<style scoped>
.divider-menu{
  border:1px solid #fff;
  width: 100%;

}
.nav-item > .nav-link {
  color: #ffff;
}

.nav-item > .nav-link:hover {
  color: #cccc;
}
</style>
