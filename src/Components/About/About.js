import blackLogo from '../../images/logo_black.png'

function About() {
    return(
        <section className="about">
            <div className='about__container'>
                <img className="about__logo" src={blackLogo} alt='логотип' />
                <div className='about__line'></div>
                <h1 className="about__title">Академия Бариста</h1>
            </div>
        </section>
    );
}

export default About;