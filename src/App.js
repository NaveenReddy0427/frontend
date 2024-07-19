import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaymentDone from "./PaymentDone";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="paymentdone" element={<PaymentDone />} />
      </Routes>
    </Router>
  );
}

export default App;