import { BrowserRouter, Routes, Route } from "react-router-dom";
import Completion from "./Completion";
import Payment from "./Payment";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
