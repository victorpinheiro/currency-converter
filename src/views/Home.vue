<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-avatar
          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
          size="32"
      ></v-avatar>

      <v-tabs
          centered
          class="ml-n9"
          color="grey darken-1"
      >
        <v-tab
            v-for="link in links"
            :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
          class="hidden-sm-and-down"
          color="grey darken-1 shrink"
          size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2"></v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <v-select
                  label="EUR"
                  placeholder="From"
                  value="EUR"
                  disabled
              ></v-select>
              <v-text-field v-model="valueToConvert"></v-text-field>
              <v-select
                  :items="currencies"
                  label="To"
                  v-model="toValue"
              ></v-select>
              <v-btn large @click="convertValue()">Convert</v-btn>
              <v-input> {{ convertedValue }} </v-input>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2"></v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    links: [
      'Dashboard',
      'Messages',
      'Profile',
      'Updates',
    ],
    toValue: '',
    valueToConvert: 0,
    convertedValue: 0,
  }),
  methods: {
    convertValue() {
      this.convertedValue = this.valueToConvert * this.$store.state.rates[this.toValue];
    },
  },
  computed: {
    ...mapGetters({ currencies: 'getAllCurrencies' }),
  },
  mounted() {
    this.$store.dispatch('fetchExchangeRates', 'EUR');
  },
};
</script>
