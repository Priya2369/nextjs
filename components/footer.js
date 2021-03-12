const Footer = () =>{
    return(
        <footer class="footer">
		<div class="inner-footer">
			<div class="quick-links">
				<ul>
				<li class="quick-items"><a href="">Jobs</a></li>
				<li class="quick-items"><a href="">Companies</a></li>
				<li class="quick-items"><a href="">About</a></li>
				<li class="quick-items"><a href="">Contact</a></li>
				</ul>
			</div>
			<div class="social-links">
				<ul>
				<li className="social-items"><a href="#">h<i class="fab fa-facebook-square"></i></a></li>
				<li class="social-items"><a href="#">h<i class="fab fa-twitter-square"></i></a></li>
				<li class="social-items"><a href="#">h<i class="fab fa-instagram"></i></a></li>
				<li class="social-items"><a href="#">h<i class="fab fa-youtube"></i></a></li>
			   </ul>	
			</div>
			<div className="hori-line"></div>
			<div class="footer-heading footer-3">
				<a href="index.html"><img src="/logo-g.png"/></a>
			</div>
		</div>
			<div class="outer-footer"><b>
				© Copyright &copy;2021.All Rights Reserved.   Privacy-Terms
				</b>
			</div>
		
	</footer>
    );
}

export default Footer;