<template>
  <v-row>
    <v-col cols="12" sm="2" />
    <v-col cols="12" sm="8" class="text-center">
      <v-card rounded="lg" class="pa-5 align-center" min-height="50vh">
        <p class="text-h4 py-5">
          <b>{{ $t("appTitle") }}</b>
        </p>
        <v-tabs center-active v-model="tab" centered>
          <v-tab v-for="(item, index) in items" :key="index">
            {{ $t(item.name) }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(item, index) in items" :key="index">
            <v-card-text v-bind:is="item.component"></v-card-text>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
      <Countdown class="py-5" />
    </v-col>
    <v-col cols="12" sm="2" />
  </v-row>
</template>

<script>
import Countdown from '@/components/Countdown.vue';
import Converter from '@/views/Converter.vue';
import CurrencyRates from '@/views/CurrencyRates.vue';

export default {
  name: 'Main',
  components: { Converter, Countdown, CurrencyRates },
  data: () => ({
    tab: null,
    items: [
      { name: 'converter', component: 'Converter' },
      { name: 'currencyRate', component: 'CurrencyRates' },
    ],
  }),
};
</script>
