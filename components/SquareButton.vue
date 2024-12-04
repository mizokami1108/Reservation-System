<template>
  <v-card
    class="square-button"
    :color="color"
    :elevation="elevation"
    @click="onClick"
    :style="{ width: width, height: height }"
    :class="{ 'disabled-card': disabled }"
  >
    <v-card-text class="text-center text-h6">
      <slot></slot>
      <!-- スロットを使用してボタン内のテキストやアイコンをカスタマイズ -->
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "blue", // デフォルトの色
  },
  width: {
    type: String,
    default: "150px", // ボタンの幅
  },
  height: {
    type: String,
    default: "50px", // ボタンの高さ
  },
  elevation: {
    type: Number,
    default: 2, // ボタンの影の強さ
  },
  disabled: {
    type: Boolean,
    default: false, // ボタンの無効化
  },
});

const emit = defineEmits();
const onClick = () => {
  if (!disabled) {
    emit("click"); // 親コンポーネントにクリックイベントを発火
  }
};
</script>

<style scoped>
.square-button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.square-button:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* disabled状態に対するスタイル */
.square-button.disabled-card {
  cursor: not-allowed;
  opacity: 0.5;
}

.square-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
