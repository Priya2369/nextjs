const Footer = () =>{
    return(
        <footer className="footer">
		<div className="inner-footer">
			<div className="quick-links">
				<ul>
				<li className="quick-items"><a href="">Jobs</a></li>
				<li className="quick-items"><a href="">Companies</a></li>
				<li className="quick-items"><a href="">About</a></li>
				<li className="quick-items"><a href="">Contact</a></li>
				</ul>
			</div>
			<div className="social-links">
				<ul>
				<li className="social-items"><a href="#">h<i className="fab fa-facebook-square"></i></a></li>
				<li className="social-items"><a href="#">h<i className="fab fa-twitter-square"></i></a></li>
				<li className="social-items"><a href="#">h<i className="fab fa-instagram"></i></a></li>
				<li className="social-items"><a href="#">h<i className="fab fa-youtube"></i></a></li>
			   </ul>	
			</div>
			<div className="hori-line"></div>
			<div className="footer-heading footer-3">
				<a href="index.html"><img src="/logo-g.png"/></a>
			</div>
		</div>
			<div className="outer-footer"><b>
				© Copyright &copy;2021.All Rights Reserved.   Privacy-Terms
				</b>
			</div>
		
	</footer>
    );
}

export default Footer;