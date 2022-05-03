import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

// Page1Routeとして別のコンポーネントの中に
// Page1配下の画面遷移の設定を切り出す

// これは配列になっていてそれぞれ要素が異なっているのは下記のみ
// これをRouterの方で読み込む
export const page1Routes = [
  {
    path: "",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/detaila",
    exact: false,
    children: <Page1DetailA />
  },
  {
    path: "/detailb",
    exact: false,
    children: <Page1DetailB />
  }
];
