<script>
import { mainMenu } from "../data/menus";

export default {
  name: "Header",
  data() {
    return {
      mainMenu,
    };
  },
};
</script>

<template>
  <header class="container">
    <div class="logo">
      <img src="../assets/img/dc-logo.png" alt="logo" />
    </div>
    <nav>
      <ul>
        <li v-for="(link, index) in mainMenu" :key="index">
          <a :href="link.href" :class="{ active: link.isActive }">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/general/variables" as *;
@use "../scss/general/mixin" as *;

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .logo {
    margin-bottom: 0;
    width: 20%;
    display: flex;
    align-items: center;
    img {
      width: 20%;
      height: auto;
    }
  }
  
  nav {
    flex: 1;
    ul {
      display: flex;
      justify-content: flex-end;
      
      li {
        margin-left: 1rem;
      }
      
      a {
        display: inline-block;
        padding: 1rem;
        text-transform: capitalize;
        font-weight: 600;
        color: $link-color;
        
        &:hover,
        &.active {
          background-color: lighten($primary-color, $amount: 50%);
        }
      }
    }
  }
}

</style>
