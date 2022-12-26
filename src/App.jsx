import "./App.css";
import { Topbar, Home, About, Skills, Blog, Contact , Footbar } from "./components/Entrycomponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Topbar />
            <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={`/about`} element={<About />} />
                <Route path={`/skills`} element={<Skills />} />
                <Route path={`/blog`} element={<Blog />} />
                <Route path={`/contact`} element={<Contact />} />
            </Routes>
          <Footbar />
        </div>
    </BrowserRouter> 
  );
}

export default App;
