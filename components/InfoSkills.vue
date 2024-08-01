<template>
  <v-card id="skills" class="my-12 pb-10" flat>
    <v-card-title>Skills</v-card-title>
    <v-card-text>
      <v-row class="justify-center">
        <v-col v-for="skill in skills" :key="skill.name" cols="10">
          <v-card>
            <v-card-title>
              {{ skill.name }}
            </v-card-title>
            <v-card-text>
              {{ skill.detail }}
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
    skills: [],
  }),
  async fetch() {
    this.skills = await this.$content('skills').fetch()
  },
}
</script>
