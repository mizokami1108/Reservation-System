<template>
  <v-container class="" fluid>
    <v-row>
      <v-col>
        <v-card-title class="display-1">グループを作成</v-card-title>
      </v-col>
    </v-row>
    <v-row align="" justify="">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <!-- グループ名 -->
              <v-text-field
                label="グループ名"
                v-model="groupName"
                :rules="[rules.required, rules.maxLength]"
                required
              />
              <v-text-field
                label="グループリーダー"
                v-model="groupLeader"
                :rules="[rules.required, rules.maxLength]"
                required
              />

              <!-- 説明（任意） -->
              <v-textarea
                label="説明"
                v-model="description"
                :rules="[rules.maxLength]"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="onSubmit"> 作成 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// フォームデータとバリデーション設定
const groupName = ref("");
const groupLeader = ref("");
const description = ref("");
const valid = ref(false);

// バリデーションルール
const rules = {
  required: (v) => !!v || "必須項目です",
  maxLength: (v) => (v && v.length <= 100) || "100文字以内で入力してください",
};

// ルーター
const router = useRouter();

// 送信処理
const onSubmit = () => {
  if (valid.value) {
    // ダミーデータ送信処理
    console.log("グループ名:", groupName.value);
    console.log("説明:", description.value);

    // フォーム送信後のリダイレクト
    alert("グループが作成されました");
    router.push("/GroupManage"); // グループ管理画面に遷移
  } else {
    alert("入力内容を確認してください");
  }
};
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
}
</style>
