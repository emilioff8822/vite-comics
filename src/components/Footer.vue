

<script>
import { mainMenu, footerMenu, footerImages } from '../data/menus';
export default {
  name: "Footer",
  data() {
    return {
      mainMenu,
      footerMenu,
      footerImages,
    };
  },
};


</script>

<template>
  <footer>
    <div class="container">
      <div class="row first-row">
        <img class="footer-image" src="../assets/img/buy-comics-digital-comics.png" alt="img">
        <img class="footer-image" src="../assets/img/buy-comics-merchandise.png" alt="img">
        <img class="footer-image" src="../assets/img/buy-comics-shop-locator.png" alt="img">
        <img class="footer-image" src="../assets/img/buy-comics-subscriptions.png" alt="img">
        <img class="footer-image" src="../assets/img/buy-dc-power-visa.svg" alt="img">
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;

footer {

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .row {
    display: flex;
    margin-bottom: 1rem;

    &.first-row {
      background-color: rgb(17, 117, 232);
      height: 25%;
      justify-content: space-evenly;
      align-items: center;
    }
  }

  .footer-image {
    width: 5%;
    padding-top:  20px;
    padding-bottom:  20px;
  }
}
</style>
