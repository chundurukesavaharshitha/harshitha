import React from "react";
import TopNav from "./components/TopNav";
import Home1 from "./components/Home1";
import Footer from "./components/Footer"; // ✅ Import Footer

function App() {
  return (
    <div className="App">
      <TopNav />
      <Home1 />
      <Footer /> {/* ✅ Add Footer here */}
    </div>
  );
}

export default App;
