import Link from 'next/link'
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Navbar = () => {
    return (
        <>

            <div class="header">
                <div class="header-logo">
                    <a>Email:mosahay.adm@gmail.com</a>


                </div>
                <div class="float-right-header">
                    <a href="#">h<i class="fab fa-facebook-square"></i></a>
                    <a href="#">h<i class="fab fa-twitter-square"></i></a>
                    <a href="#">h<i class="fab fa-instagram"></i></a>
                    <a href="#">h<i class="fab fa-youtube"></i></a>

                </div>
            </div>
            <div class="navbar">
                <div class="navbar-logo">
                    <a href="index.html"><img src="logo-g.png" /></a>
                </div>
                <div class="float-navbar">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/jobs"><a>Jobs</a></Link>
                    <Link href="/companies"><a>Companies</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                    <Link href="/login"><a>Login</a></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;