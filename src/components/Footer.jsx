import React from "react";
import Logo from "./logo";

function Footer(){
    return(
        <div class="container" id="c-2">
       <Logo size="340px"/>
        <div id="footer">
        <div class="box"><h3>CONTACT US</h3>
        <ul>
          <li><a href="">jamiami@180dc.org</a></li>
          <li><a href="">Jamia Millia Islami , Jamia Nagar Okhla , New Delhi , India ,110025</a></li>
          <li><a href="">+91 XXXXXXXX</a></li>
        </ul>
        </div>
        <div class="box"><h3>ABOUT US</h3>
        <ul>
          <li><a href="">Mission and vision</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">The Team</a></li>
          <li><a href="">Clients</a></li>
        </ul>
        </div>
        <div class="box"><h3>DELIVERABLES</h3>
        <ul>
          <li><a href="">Blog</a></li>
          <li><a href="">Articles</a></li>
          <li><a href="">Reports</a></li>
        </ul>
        </div>
        <div class="box" ><h3>SHOP</h3>
        <ul>
          <li><a href="">180 DC Merchandise</a></li>
        </ul>
        </div>
        <div class="box" id="social"><h3>SOCIALS</h3>
        <ul>
          <li><a href=""> </a></li>
          <li><a href=""> </a></li>
          <li><a href=""> </a></li>
          <li><a href=""> </a></li>
        </ul>
        </div>
      </div>
    </div>

    )

}

export default Footer;