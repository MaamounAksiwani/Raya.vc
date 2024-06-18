import Navbar from "./components/Navbar/Navbar";
import "wowjs/css/libs/animate.css";
import Favicon from "react-favicon";
import logo from "../src/until/favicon-logo-removebg-preview.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import HomePage from "./components/HomePage/HomePage";
import People from './components/People/People'
import Partnerships from "./components/Partnerships/Partnerships";
import History from "./components/History/History";
import ThirdBYID from "./components/ThirdSection/ThirdBYID";
function App() {
  const faviconUrl = logo;
  return (
    <>
      <BrowserRouter>
        <Favicon url={faviconUrl} />
        <Navbar />
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/people" element={<People />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path='/history' element={<History/>}/>
          <Route exact path='/uniapp' element={<ThirdBYID/>} /> 
          <Route exact path="/partnerships" element={<Partnerships />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
