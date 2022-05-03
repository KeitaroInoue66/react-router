// stateを確認するのはuseLocationというもの
import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  // 情報を持ったまま遷移できる
  const { state } = useLocation();
  console.log(state);

  // Linkを使用しないで遷移させる方法
  const history = useHistory();

  const onclickBack = () => history.push("/page1");

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onclickBack}>戻る</button>
    </div>
  );
};
