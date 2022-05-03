import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

// Page1Routeとして別のコンポーネントの中に
// Page1配下の画面遷移の設定を切り出す

// これは配列になっていてそれぞれ要素が異なっているのは下記のみ
// これをRouterの方で読み込む
export const page2Routes = [
  {
    path: "",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
