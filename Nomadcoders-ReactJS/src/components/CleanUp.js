import { useState, useEffect } from "react";

function Hello() {
  function byeFunc() {
    console.log("destroyed :("); // 제거될때 1회 실행
  }
  function hiFunc() {
    console.log("created :)"); // 생성될때 1회 실행
    return byeFunc;
  }
  useEffect(hiFunc, []);
  return <h1>Hello</h1>;
}

/*
  function Hello() {
    useEffect(() => {
      console.log("created :)"); // 생성될때 1회 실행
      return () => console.log("destroyed :("); // 제거될때 1회 실행
    }, []);

    return <h1>Hello</h1>;
  }

  버튼 클릭시, created :) , destroyed :(, created :) 메세지가 3개가 등장하였습니다.
  이유는 index.js의 React.StricMode 가 활성화 되어 있어서네요.
  급하게 강의를 따라하느라 끄라고 했었는지는 기억이 잘 나지 않지만 혹시 저와 같이 함수가 두번 실행되는 경우 (double invoke)가 발생하면 위의 코드를 주석처리 하시면 될것 같습니다.

  stricmode의 경우, 개발 과정중 안전을 위해 켜는 기능이며 배포시에 자동으로 해제된다고 합니다.
*/

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;

