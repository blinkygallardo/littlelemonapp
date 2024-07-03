import Nav from './Nav';

export default function Footer() {
    return (
      <footer>
        <img src="footerLogo.png" alt="Little Lemon logo"/>
        <section className='nav'>
            <label>Navigation:</label>
            <Nav/>
        </section>
        <section className='contact'>
            <label>Contact:</label>
            <div>
                3139 Fitzgerald Road<br/>
                Grisby, SE13 3TU
            </div>
            <div>
                <a href="mailto:info@LittleLemon.com">info@LittleLemon.com</a>
            </div>
        </section>
        <section className='social'>
            <label>Follow us:</label>
            <ul>
                <li><a href="http://www.facebook.com/LittleLemon">Facebook</a></li>
                <li><a href="http://www.instagram.com/LittleLemon">Instagram</a></li>
                <li><a href="http://www.tiktok.com/LittleLemon">Tiktok</a></li>
                <li><a href="http://www.truthsocial.com/LittleLemon">TruthSocial</a></li>
            </ul>
        </section>
        <section className='cp'>
            <div>
                Copyright 2024 Little Lemon Ltd
            </div>
        </section>
      </footer>
    );
  }
