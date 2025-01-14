import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

/*
  react-router-dom 버전 6 으로 설치했을때 아래 참고
  https://reactrouter.com/docs/en/v6/getting-started/overview

    <Router basename={process.env.PUBLIC_URL}>

 */

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
