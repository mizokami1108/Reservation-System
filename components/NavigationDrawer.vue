<template>
  <v-app>
    <!-- ヘッダー -->
    <v-app-bar app color="blue-darken-4">
      <v-app-bar-nav-icon @click="drawerStore.toggle" dark />
      <v-toolbar-title>タイトル</v-toolbar-title>
      <v-card-text>Administrator</v-card-text>
      <v-btn icon="mdi-delete"> </v-btn>
    </v-app-bar>

    <!-- ドロワー -->
    <v-navigation-drawer v-model="drawerStore.isOpen" app color="grey-darken-3">
      <v-card class="mr-2 ml-2 mt-2">
        <v-row justify="center">
          <v-col cols="12">
            <v-card-title>タイトル</v-card-title>
            <v-card-text>テキスト</v-card-text>
          </v-col>
        </v-row>
      </v-card>
      <v-list class="ml-5">
        <v-list-item prepend-icon="mdi-home" to="/">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item prepend-icon="mdi-account">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-subheader>管理者メニュー</v-list-subheader>
        <v-list-item prepend-icon="mdi-account-cog" to="/AccountManage">
          <v-list-item-title>アカウント管理</v-list-item-title>
        </v-list-item>
        <v-list-item prepend-icon="mdi-account-group" to="/GroupManage">
          <v-list-item-title>グループ管理</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <TheToast />
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useDrawerStore } from "~/stores/drawerStore";
import TheToast from "~/components/Toast/Toast.vue";

const drawerStore = useDrawerStore();
</script>
