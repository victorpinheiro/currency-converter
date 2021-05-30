<template>
  <v-app-bar app color="primary" class="white--text">
    <v-toolbar-title>Currency Converter</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="toggleDarkTheme()">
      <v-icon color="white">mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleDarkTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style>
</style>
