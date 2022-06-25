import Classifier from "./view/Classifier";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ResultView from "./view/ResultView";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Classifier/>}></Route>
          <Route path="/result" element={<ResultView/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
