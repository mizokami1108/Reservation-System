import { defineStore } from "pinia";

interface State {
  isActive: boolean;
  icon: string;
  text: string | null;
  color: "success" | "warning" | "error";
}

// ストアの型を明示的に定義
export const useToastStore = defineStore("toast", {
  // Store初期値
  state: (): State => ({
    isActive: false,
    icon: "",
    text: null,
    color: "success",
  }),
  actions: {
    /**初期化 */
    unsetSnackbar() {
      this.$reset;
    },
    /**トーストの表示 */
    setToast(text: State["text"]) {
      this.isActive = true;
      this.text = text;
    },
    setSuccessToast(text: State["text"]) {
      this.setToast(text);
      this.icon = "mdi-check-circle";
      this.color = "success";
    },
    setWarningToast(text: State["text"]) {
      this.setToast(text);
      this.icon = "mdi-alert-circle";
      this.color = "warning";
    },
    setErrorToast(text: State["text"]) {
      this.setToast(text);
      this.icon = "mdi-close-circle";
      this.color = "error";
    },
  },
});
