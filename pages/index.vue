<template>
  <v-container>
    <v-row>
      <v-col>
        <VBtn
          color="success"
          @click="toastStore.setSuccessToast('成功しました！')"
        >
          成功トーストの表示</VBtn
        >
        <VBtn color="warning" @click="toastStore.setWarningToast('警告です！')">
          警告トーストの表示</VBtn
        >
        <VBtn color="error" @click="toastStore.setErrorToast('失敗しました！')">
          失敗トーストの表示</VBtn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <SquareButton
          color=""
          width="200px"
          height="60px"
          @click="handleClick"
          :elevation="10"
        >
          ボタンをクリック
        </SquareButton>
      </v-col>
      <v-col>
        <NotificationArea />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { useToastStore } from "~/stores/toast";
import { useDrawerStore } from "~/stores/drawerStore";

const toastStore = useToastStore();
const isDisabled = ref(false);

const handleClick = () => {
  alert("ボタンがクリックされました！");
};
</script>
