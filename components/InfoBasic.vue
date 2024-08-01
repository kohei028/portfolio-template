<template>
  <v-card id="basic" class="my-12 pb-10" flat>
    <v-card-title> Basic Info </v-card-title>
    <v-card-text>
      <v-simple-table>
        <template #default>
          <tbody>
            <tr v-for="item in info" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.val }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    info: [],
  }),
  async fetch() {
    this.info = await this.$content('basic').sortBy("createdAt").fetch()
  },
}
</script>