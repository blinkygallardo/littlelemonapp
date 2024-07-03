import './Testimonials.css';

export default function Testimonials() {
    return (
        <div className="testi">
            <h1>Testimonials</h1>
            <div className="caroussel">
                <article>
                    <p className='rating'>Rating: 5.0</p>
                    <img className='star' src="Star.jpg"/>
                    <img src="reviewer1.jpg" alt="Photo of the reviewer"/>
                    <p className='name'>Jack S.</p>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </article>
                <article>
                    <p className='rating'>Rating: 5.0</p>
                    <img className='star' src="Star.jpg"/>
                    <img src="reviewer2.jpg" alt="Photo of the reviewer"/>
                    <p className='name'>Helen P.</p>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </article>
                <article>
                    <p className='rating'>Rating: 5.0</p>
                    <img className='star' src="Star.jpg"/>
                    <img src="reviewer3.jpg" alt="Photo of the reviewer"/>
                    <p className='name'>Sandy T.</p>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </article>
                <article>
                    <p className='rating'>Rating: 5.0</p>
                    <img className='star' src="Star.jpg"/>
                    <img src="reviewer4.jpg" alt="Photo of the reviewer"/>
                    <p className='name'>Yoli S.</p>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </article>
                <article>
                    <p className='rating'>Rating: 5.0</p>
                    <img className='star' src="Star.jpg"/>
                    <img src="anon.png" alt="Photo of the reviewer"/>
                    <p className='name'>Pierre D.</p>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                </article>
            </div>
        </div>
    );
  }