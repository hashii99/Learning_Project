import React from "react"
import '../style/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div className="body">
      <footer class="footer">
        <ul class="social-icon">
          <li class="social-icon__item"><a class="social-icon__link" href="#">
            <IconButton><FacebookIcon /></IconButton>
          </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="#">
            <IconButton><InstagramIcon /></IconButton>
          </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="#">
            <IconButton><TelegramIcon /></IconButton>
          </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="#">
            <IconButton><LinkedInIcon /></IconButton>
          </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="#">
            <IconButton><TwitterIcon /></IconButton>
          </a></li>
        </ul>

        <ul class="menu">
          <li class="menu__item"><a class="menu__link" href="#" style={{color:'black', fontWeight:'bold'}}>Home</a></li>
          <li class="menu__item"><a class="menu__link" href="#" style={{color:'black', fontWeight:'bold'}}>About</a></li>
          <li class="menu__item"><a class="menu__link" href="#" style={{color:'black', fontWeight:'bold'}}>Services</a></li>
          <li class="menu__item"><a class="menu__link" href="#" style={{color:'black', fontWeight:'bold'}}>Team</a></li>
          <li class="menu__item"><a class="menu__link" href="#" style={{color:'black', fontWeight:'bold'}}>Contact</a></li>
        </ul>

        <p>&copy;2023 Hashini Thilinika | All Rights Reserved</p>
      </footer>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>

  )

}

export default Footer;
