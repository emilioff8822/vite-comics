

<script>
import {mainMenu} from '../data/menus';
export default {
name: "Header",
data () {
return{
  mainMenu
}  
}
}
</script>

<template>
  <header class="container">
    <div class="logo">
      <img src="../assets/img/dc-logo-bg.png" alt="logo">

   
    </div>
    <nav>
      <ul>
 <!-- Ricordarsi di mettere il bind della key passando un parametro univoco, altrimenti il v-for non funziona, in questo caso abbiamo utilizzato l'index, ma quando useremo le API di solito si inserisce l'ID che viene fornito. -->

        <li v-for="(link , index) in mainMenu"
        :key="index" >
        <a :href="link.href" :class="{'active' : link.isActive}">{{link.text}}</a>
      </li>
      </ul>
    </nav>
  </header>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as * ;

@use '../scss/general/mixin' as * ;

header{
display: flex;
justify-content: space-between;
align-items: center;
.logo{
  margin-bottom:0;
}
img {
  width: 30%
}
ul {
@include centerFlex('horizontal');  
a{
  display: inline-block;
  padding: 1rem;
  text-transform: capitalize;
  font-weight: 600;
  color: $link-color;
  &:hover,
  &.active {
    background-color: lighten($primary-color , $amount: 50%);
  }
}
}

}

</style>