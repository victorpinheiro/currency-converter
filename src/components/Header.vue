<template>
  <v-app-bar app color="primary" class="white--text">
    <v-toolbar-title>Currency Converter</v-toolbar-title>
    <v-spacer />
    <ThemeSelector />
    <LanguageSelector />
  </v-app-bar>
</template>

<script>
import LanguageSelector from '@/components/LanguageSelector.vue';
import ThemeSelector from '@/components/ThemeSelector.vue';

export default {
  name: 'Header',
  components: { ThemeSelector, LanguageSelector },
};
</script>
