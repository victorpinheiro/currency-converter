<template>
  <v-container>
    <Header />
    <Main />
    <Footer />
  </v-container>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Main from '@/components/Main.vue';

export default {
  components: { Main, Footer, Header },

};
</script>
