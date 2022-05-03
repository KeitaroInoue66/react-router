// URLパタメーターを扱う際にはこちらのreact-router-domのuseParamsを使う
import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  // 設定の時にidとしているのでidとする
  const { id } = useParams();
  // このsearchの中に?以降の文字列が入ってくる
  // そのsearchをURLParamsの引数に渡す
  const { search } = useLocation();
  // URLSearchParamsとはjavascriptが標準で持っている関数
  const query = new URLSearchParams(search);
  // console.log(search);
  return (
    <div>
      <h1>URLパラメーターページです</h1>
      <p>パラメーターは{id}</p>
      <p>クエリパラメーターは{query.get("name")}</p>
    </div>
  );
};
