<template>
  <v-app>
    <!-- ヘッダー -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawerStore.toggle" color="blue" dark />
      <v-toolbar-title>タイトル</v-toolbar-title>
    </v-app-bar>

    <!-- ドロワー -->
    <v-navigation-drawer v-model="drawerStore.isOpen" app color="blue">
      <v-list>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot />
      <!-- ページ内容を表示 -->
    </v-main>
  </v-app>
</template>

<script setup>
import { useDrawerStore } from "~/stores/drawerStore";

const drawerStore = useDrawerStore();
</script>
