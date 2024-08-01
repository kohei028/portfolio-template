<template>
  <v-navigation-drawer app color="primary" floating>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">My Portfolio</v-list-item-title>
        <v-list-item-subtitle> Web Engineer Portfolio </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav flat class="pr-0">
      <v-list-item
        v-for="item in $sections"
        :key="item.title"
        :ripple="{ class: 'primary--text' }"
        :to="'#' + item.slag"
        active-class="active-link rounded-pill rounded-r-0"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.active-link {
  background-color: var(--v-secondary-base);
  padding-left: 12px;
}
</style>
