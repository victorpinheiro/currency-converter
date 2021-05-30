<template>
  <v-btn icon @click="toggleDarkTheme()">
    <v-icon color="white">mdi-theme-light-dark</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ThemeSelector',
  methods: {
    toggleDarkTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
