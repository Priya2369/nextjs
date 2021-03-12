import Footer from "./footer.js"
import Navbar from "./navbar.js"

const Layout = ({children}) =>{
    return(
        <div className="content"> 
           <Navbar/>
           {children}
           <Footer/>
     </div>
    );
}

export default Layout;