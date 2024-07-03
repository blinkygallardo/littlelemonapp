import './Specials.css';

export default function Specials() {
    return (
        <div className='specials'>
            <h1>Specials</h1>
            <button>Order Online</button>
            <div className='caroussel'>
                <article>
                    <img src="greek salad.jpg"/>
                    <h2>Greek Salad</h2>
                    <h3>$11.99</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
                </article>
                <article>
                    <img src="lasagna.jpg"/>
                    <h2>Lasagna</h2>
                    <h3>$15.99</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
                </article>
                <article>
                    <img src="lemon dessert.jpg"/>
                    <h2>Lemon Dessert</h2>
                    <h3>$6.99</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
                </article>
            </div>
        </div>
    );
  }