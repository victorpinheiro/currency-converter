<template>
  <div class="text-center">
    <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon fab>
          <v-icon color="white">
            mdi-translate
          </v-icon>
        </v-btn>
      </template>

      <v-list rounded>
        <v-list-item-group v-model="$i18n.locale">
          <v-list-item v-for="(item, index) in langs" :key="index" :value="item.id">
            <v-list-item-title v-text="item.title" v-model="item.id" />
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
  data: () => ({
    langs: [
      {
        id: 'nl',
        title: 'Dutch',
      }, {
        id: 'en',
        title: 'English',
      }, {
        id: 'pt',
        title: 'Português',
      },
    ],
  }),
};
</script>
