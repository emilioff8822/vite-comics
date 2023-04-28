<script>
export default {
  name: "Main"
}
</script>

<template>
  <div class="container">
    <div class="jumbotron">
      <img class="logo" src="../assets/img/jumbotron.jpg" alt="logo">
    </div>
    <div class="card-container">
      <!-- Contenuto della card container -->
      
    </div>
  </div>
</template>

<style lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.jumbotron {
  background-image: url('../assets/img/jumbotron.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-container {
  background-color: black;
  height: 60%;
}

.logo {
  width: 100%;
}
</style>
