import { Route, Routes, BrowserRouter } from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuestionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
