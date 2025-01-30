import './App.css'
import {HomePage} from "./pages/home-page/HomePage.jsx";
import Layout from "./Layout.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
      <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </Layout>
  )
}

export default App
