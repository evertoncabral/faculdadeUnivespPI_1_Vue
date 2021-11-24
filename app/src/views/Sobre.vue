<template>
  <div class="container mt-2">
    <b-form>
      <b-form-group label="Titulo" label-for="subject"> </b-form-group>
      <b-form-input
      id="subject"
      v-model="form.subject"
      type="text"
      placeholder="Titulo"
      required
      autocomplete="off"
      >
    </b-form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>



