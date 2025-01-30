import Footer from "./components/navigation/footer/Footer.jsx";
import Navbar from "./components/navigation/navbar/Navbar.jsx";
import "./Layout.css"

const Layout = ({ children }) => {

    return (
        <div className="app-layout">
            <Navbar/>
            <main className="content">
                {children}
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;