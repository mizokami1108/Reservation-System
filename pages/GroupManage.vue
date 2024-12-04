<!-- <template>
  <v-container> -->
<!-- ヘッダー部分（グループ管理）と右上の作成ボタン -->
<!-- <v-row class="mb-4" justify="space-between" align="center">
      <v-col cols="auto">
        <v-card-title class="display-1">グループ管理</v-card-title>
      </v-col>
      <v-col class="text-right" cols="auto">
        <v-btn color="primary" @click="onCreateClick" class="mb-2">
          作成
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-data-table
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          :items="dataset"
          item-value="name"
          class="elevation-1"
          style="height: 100%"
        ></v-data-table>
      </v-col>
      <v-col cols="6">
        <v-sheet border="1">
          <v-btn />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template> -->

<template>
  <v-container>
    <!-- ヘッダー部分（グループ管理）と右上の作成ボタン -->
    <v-row class="" justify="space-between" align="center">
      <v-col cols="auto">
        <v-card-title class="display-1">グループ管理</v-card-title>
      </v-col>
      <v-col class="text-right" cols="auto">
        <v-btn
          color="primary"
          @click="onCreateClick"
          class="mb-2"
          to="/GroupCreate"
        >
          作成
        </v-btn>
      </v-col>
    </v-row>

    <!-- グループテーブル -->
    <v-row>
      <v-col>
        <v-data-table
          v-model:items-per-page="itemsPerPage"
          :headers="headers"
          :items="dataset"
          item-value="name"
          :search="search"
          class="elevation-1 table-with-fixed-height"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-card-subtitle>グループ一覧</v-card-subtitle>
              <v-text-field
                v-model="search"
                placeholder="グループ名を検索"
                single-line
                hide-details
                density
                variant="solo"
                bg-color="white"
                max-width="500"
              ></v-text-field>
            </v-toolbar>
          </template>

          <template v-slot:item.name="{ item }">
            <v-chip color="blue" text-color="white" class="ma-2">
              {{ item.name }}
            </v-chip>
          </template>
          <template v-slot:actions="{ item }">
            <v-icon size="small" @click="editItem(item.row)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup="ts">
// import { ref } from "vue"; // refをインポート

// const itemsPerPage = ref(10); // ページあたりのアイテム数
// const headers = [
//   {
//     title: "グループ名",
//     align: "start",
//     sortable: false,
//     key: "name",
//   },
//   { title: "グループオーナー", align: "start", key: "no" },
//   { title: "所属人数", align: "start", key: "area" },
//   { title: "無効", align: "center", type: "checkbox" },
// ];

// const dataset = [
//   { name: "第１グループ", no: 1, area: 83456.2 },
//   { name: "第２グループ", no: 2, area: 13562.23 },
//   { name: "第３グループ", no: 3, area: 2187.42 },
//   { name: "第４グループ", no: 4, area: 4726.12 },
//   { name: "第５グループ", no: 5, area: 1876.47 },
//   { name: "第６グループ", no: 6, area: 2415.84 },
//   { name: "第７グループ", no: 7, area: 7113.0 },
//   { name: "第８グループ", no: 8, area: 9187.8 },
//   { name: "第９グループ", no: 9, area: 7285.73 },
//   { name: "第１０グループ", no: 10, area: 4185.47 },
// ];

import { ref } from "vue";

// ページあたりのアイテム数
const itemsPerPage = ref(10);
const search = ref("");
// ヘッダー情報（カラム）
const headers = [
  { title: "No", align: "start", key: "no" },
  {
    title: "グループ名",
    align: "start",
    sortable: true,
    key: "name",
  },

  { title: "面積", align: "end", key: "area" },
  { title: "操作", align: "end", key: "actions" },
];

// データセット
const dataset = [
  { name: "北海道", no: 1, area: 83456.2 },
  { name: "長野県", no: 2, area: 13562.23 },
  { name: "東京都", no: 3, area: 2187.42 },
  { name: "和歌山県", no: 4, area: 4726.12 },
  { name: "香川県", no: 5, area: 1876.47 },
  { name: "神奈川県", no: 6, area: 2415.84 },
  { name: "岡山県", no: 7, area: 7113.0 },
  { name: "鹿児島県", no: 8, area: 9187.8 },
  { name: "宮城県", no: 9, area: 7285.73 },
  { name: "石川県", no: 10, area: 4185.47 },
  { name: "北海道", no: 1, area: 83456.2 },
  { name: "長野県", no: 2, area: 13562.23 },
  { name: "東京都", no: 3, area: 2187.42 },
  { name: "和歌山県", no: 4, area: 4726.12 },
  { name: "香川県", no: 5, area: 1876.47 },
  { name: "神奈川県", no: 6, area: 2415.84 },
  { name: "岡山県", no: 7, area: 7113.0 },
  { name: "鹿児島県", no: 8, area: 9187.8 },
  { name: "宮城県", no: 9, area: 7285.73 },
  { name: "石川県", no: 10, area: 4185.47 },
];

// 作成ボタンクリック時の処理
const onCreateClick = () => {
  // 作成ボタンがクリックされた時の処理をここに追加
  console.log("作成ボタンがクリックされました");
};
</script>

<style scoped>
/* テーブルヘッダーのカスタムスタイル */
.v-toolbar-title {
  font-weight: bold;
}

/* 作成ボタンのスタイル */
.v-btn {
  font-weight: bold;
  text-transform: none;
  padding: 10px 20px;
}

/* レスポンシブ対応: 画面が小さいとボタンとタイトルの位置を調整 */
@media (max-width: 600px) {
  .v-row {
    flex-direction: column-reverse;
  }
}
</style>
