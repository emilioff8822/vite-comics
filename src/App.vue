

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
name: "App",
components :{
  Header,
  Main,
  Footer
}

}


</script>


<template>
<Header/>
<Main/>
<Footer/>
  
</template>

<style lang="scss">
//stili generali per tutta l'applicazione pertanto n n ce scoped nel tag style

@use './scss/main.scss'

</style>