<template>
  <p class="countdown">
    Updating currency rates in {{ new Date(timerCount * 1000).toISOString().substr(11, 8) }}
  </p>
</template>

<script>
import mixin from '@/mixins/mixin';

export default {
  name: 'Countdown',
  mixins: [mixin],
  data: () => ({
    timerCount: 3600,
  }),
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            // eslint-disable-next-line no-plusplus
            this.timerCount--;
            if (value === 1) {
              this.fetchExchangeRates('EUR');
              this.timerCount = 3600;
            }
          }, 1000);
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.countdown {
  min-height: 20vh;
}
</style>
