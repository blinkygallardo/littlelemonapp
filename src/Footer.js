import Nav from './Nav';

export default function Footer() {
    return (
      <footer>
        <img src="footerLogo.png" alt="Little Lemon logo"/>
        <section>
            <label>Navigation:</label>
            <Nav/>
        </section>
        <section>
            <label>Contact:</label>
            3139 Fitzgerald Road
            Grisby, SE13 3TU

            info@LittleLemon.com
        </section>
        <section>
            <label>Follow us:</label>
            <ul>
                <li><a href="http://www.facebook.com/LittleLemon">Facebook</a></li>
                <li><a href="http://www.instagram.com/LittleLemon">Instagram</a></li>
                <li><a href="http://www.tiktok.com/LittleLemon">Tiktok</a></li>
                <li><a href="http://www.truthsocial.com/LittleLemon">TruthSocial</a></li>
            </ul>
        </section>
        Copyright 2024 Little Lemon Ltd
      </footer>
    );
  }
