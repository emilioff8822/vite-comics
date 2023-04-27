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
      <div class="row row1">
        <div class="footer-item">
          <img class="footer-image" src="../assets/img/buy-comics-digital-comics.png" alt="img">
          <span class="footer-text">DIGITAL COMICS</span>
        </div>
        <div class="footer-item">
          <img class="footer-image" src="../assets/img/buy-comics-merchandise.png" alt="img">
          <span class="footer-text">DC MERCHANDISE</span>
        </div>
        <div class="footer-item">
          <img class="footer-image" src="../assets/img/buy-comics-shop-locator.png" alt="img">
          <span class="footer-text">COMIC SHOP LOCATOR</span>
        </div>
        <div class="footer-item">
          <img class="footer-image" src="../assets/img/buy-comics-subscriptions.png" alt="img">
          <span class="footer-text">SUBSCRIPTION</span>
        </div>
        <div class="footer-item">
          <img class="footer-image" src="../assets/img/buy-dc-power-visa.svg" alt="img">
          <span class="footer-text">DC POWER VISA</span>
        </div>
      </div>
      <div class="row row2">
        <div class="column column1">
          <p>Testo casuale 1</p>
          <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
          </ul>
          <p>Testo casuale 2</p>
          <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
          </ul>
          <p>Testo casuale 3</p>
          <ul>
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
          </ul>
        </div>
        <div class="column column2">
          <!-- Lasciare vuoto -->
        </div>
      </div>
      <div class="row row3">
        <button class="sign-up-btn">SIGN-UP NOW</button>
        <div class="follow-us">
          <span>FOLLOW US</span>
          <img src="../assets/img/footer-facebook.png" alt="logo">
          <img src="../assets/img/footer-periscope.png" alt="logo">
          <img src="../assets/img/footer-pinterest.png" alt="logo">
          <img src="../assets/img/footer-twitter.png" alt="logo">
        </div>
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

    &.row1 {
      background-color: rgb(17, 117, 232);
      height: 25%;
      align-items: center;
      justify-content: center;
      padding-right: 150px;
      padding-left: 150px;
    }

    &.row2 {
      background-image: url('../assets/img/footer-bg.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      height: 50%;
      justify-content: space-between;
      align-items: center;
      color: lightgray;
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-right: 150px;
      padding-left: 150px;
    }

    &.row3 {
      background-color: rgb(44, 43, 43);
      height: 25%;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      padding-bottom: 2rem;
      padding-right: 150px;
      padding-left: 150px;
    }
  }

  .column {
    &.column1 {
      width: 30%;
    }

    &.column2 {
      width: 70%;
    }
  }

  .footer-item {
    display: flex;
    align-items: center;
  }

  .footer-image {
    width: 15%; 
    padding-top: 20px;
    padding-bottom: 20px;
    margin-right: 10px;
  }

  .footer-text {
    display: inline-block;
    vertical-align: middle;
  }

  .sign-up-btn {
    background-color: rgb(44, 43, 43);
    border: 2px solid rgb(17, 117, 232);
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .follow-us {
    display: flex;
    align-items: center;

    span {
      color: rgb(17, 117, 232);
      margin-right: 1rem;
    }

    img {
      width: 30px;
      height: 30px;
      margin-left: 0.5rem;
    }
  }
}
</style>
