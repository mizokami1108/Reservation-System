<template>
  <v-container>
    <v-row>
      <v-col> </v-col>
    </v-row>
    <v-row>
      <v-col>
        <SquareButton
          color=""
          width="200px"
          height="60px"
          @click="handleClick"
          elevation="10"
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
<script lang="ts">
const isDisabled = ref(false);

const handleClick = () => {
  alert("ボタンがクリックされました！");
};
</script>
