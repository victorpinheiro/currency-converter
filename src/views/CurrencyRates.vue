<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            {{ $t("currencyName") }}
          </th>
          <th class="text-center">
            {{ $t("currencyRate") }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rateValue, rateName) in rates" :key="rateName">
          <td>{{ rateName }}</td>
          <td>{{ rateValue }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CurrencyRates',
  date: () => ({}),
  computed: {
    ...mapGetters({ rates: 'getRates' }),
    ...mapGetters({ currencies: 'getAllCurrencies' }),
  },
};
</script>
