import Link from 'next/link'
import {Button} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const Navbar = () =>{
    return(
        <nav>
            <div className='logo'>
                <h1>LOGO</h1>
            </div>
            <Link href="/"><a>Home</a></Link> 
           <Link href="/jobs"><a>Jobs</a></Link> 
           <Link href="/companies"><a>Companies</a></Link> 
           <Link href="/about"><a>About</a></Link> 
           <Link href="/contact"><a>Contact</a></Link> 
           <Link href="/login"><a><Button variant="contained" color="primary" size="small"><AccountCircleIcon/>Login</Button></a></Link> 
        </nav>
    )
}

export default Navbar;