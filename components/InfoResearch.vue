<template>
  <v-card id="research" class="my-12 pb-10" flat>
    <v-card-title>Research</v-card-title>
    <v-card-text>
      <v-row class="justify-center">
        <v-col v-for="research in researchs" :key="research.theme" cols="10">
          <v-card>
            <v-card-title>
              {{ research.theme }}
            </v-card-title>
            <v-card-text>
              {{ research.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    researchs: [],
  }),
  async fetch() {
    this.researchs = await this.$content('research').fetch()
  },
}
</script>
