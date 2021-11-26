<template>
  <div>
    <form name="meu_form">
      <h1>Entre em contato</h1>

      <input
        type="text"
        id="nomeid"
        placeholder="Nome Completo"
        required="required"
        name="nome"
      />
      <label for="nome">Nome</label>

      <input type="tel" id="foneid" placeholder="(xx)xx-xx-xx-xx" name="fone" />
      <label for="fone">Fone</label>

      <input
        type="email"
        id="emailid"
        placeholder="email"
        name="email"
      />
      <label for="email">Email</label>

      <textarea placeholder="Envie  seus comentáriossobre a plataforma "></textarea>

      <input type="submit" class="enviar" onclick="Enviar();" value="Enviar" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Sobre",
};
</script>

<style scoped>
body {
    padding: 0;
    margin: 0;
}

form {
    font-family: Verdana,Tahoma,sans-serif;
    font-size: 15px;
    background-color: gray;
    max-width: 500px;
}

h1 {
    margin-bottom: 20px;
    margin-left: 20px;
    color: white;
    text-shadow: 5px 5px 5px black;
}

input, textarea {
    width: 200px;
    padding: 10px;
    color: black;
    margin-left: 20px;
    margin-top: 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border: 1px solid;
}

input:hover, textarea:hover, input:focus, textarea:focus {
    border-color: #000066;
    box-shadow: 5px 0px 9px ;
    background-color: gray;
    color: black;
    font-weight: bold;
}

.enviar {
    background-color: white;
    height: 40px;
    width: 100px;
    font-weight: bold;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border: 1px solid;
    color: black;
}

textarea {
    width: 400px;
    height: 120px;
    line-height: 20px;
    max-width: 400px;
}

form label {
    margin-left: 20px;
    color: #FFFFFF;
    font-weight: bold;
}
</style>