<template>
  <v-footer color="primary" absolute class="white--text">
    <v-col class="text-center" cols="12">
      <span>
        {{ new Date().getFullYear() }} — Made with
        <v-icon color="red">mdi-heart</v-icon> by
        <a
          href="https://www.linkedin.com/in/victor-pinheiro-4a469339/"
          class="white--text"
          target="_blank"
        >
          <strong>Victor Pinheiro</strong>
        </a>
      </span>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
