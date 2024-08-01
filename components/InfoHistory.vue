<template>
  <v-card id="history" class="my-12 pb-10" flat>
    <v-card-title>History</v-card-title>
    <v-card-text>
      <v-timeline>
        <v-timeline-item
          v-for="(event, i) in history"
          :key="i"
          :color="event.color"
          small
        >
          <template #opposite>
            <span
              :class="`headline font-weight-bold ${event.color}--text`"
              v-text="event.date"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${event.color}--text`">
              {{ event.name }}
            </h2>
            <div>
              {{ event.detail }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    history: [],
  }),
  async fetch() {
    this.history = await this.$content('history').sortBy('date').fetch()
  },
}
</script>
