<template>
  <v-card id="work" class="my-12 pb-10" flat>
    <v-card-title>work</v-card-title>
    <v-card-text>
      <v-row class="justify-center">
        <v-col v-for="work in works" :key="work.title" cols="10">
          <v-card>
            <v-card-title>
              {{ work.title }}
            </v-card-title>
            <v-card-actions v-if="work.isLinkActive">
              <v-btn
                text
                color="blue"
                :href="work.link"
                target="_blank"
                style="text-transform: none"
              >
                {{ work.link }}
                <v-icon right>mdi-open-in-new</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-text v-else>
              {{ work.link }}
            </v-card-text>
            <v-card-actions>
              <v-chip-group column>
                <v-chip v-for="category in work.categories" :key="category">
                  {{ category }}
                </v-chip>
              </v-chip-group>
            </v-card-actions>
            <v-card-text>
              {{ work.description }}
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
    works: [],
  }),
  async fetch() {
    this.works = await this.$content('work').fetch()
  },
}
</script>
