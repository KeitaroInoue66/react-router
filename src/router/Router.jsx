import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      {/* 下記のexactがないと"/"配下の場合全てHomeコンポーネントを表示してしまう */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* 下記で/page1というパスの場合がはPage1コンポーネントを表示するというものになります */}
      {/* もう一つの書き方でrender関数というものがある。これはrender関数にはデフォルトでpropsを持っている */}
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {/* Page1配下のSwitchの中にPage1Routesで作成した配列を処理して */}
            {/* Routeの中にそれぞれ設定値が異なる部分を設定してより簡潔にした */}
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
            {/* 下記でpropsの中身を見ると確かにtasikani/page1がurlプロパティの中に存在している */}
            {/* {console.log(props)} */}
            {/* {console.log(url)} */}
            {/* <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route> */}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      {/* アスタリスクは完全一致等ものでどれにも当てはまらなかったらコンポーネントを表示するという意味になる */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
