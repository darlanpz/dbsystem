import './Home.css'

import Nav from '../components/Nav/Nav'
import TextContainer from '../components/TextContainer/TextContainer'
import Button from '../components/Button/Button'
import HeroImg from '../assets/hero.svg'
import ClientLogo01 from '../assets/client-logo-01.svg'
import ClientLogo02 from '../assets/client-logo-02.svg'
import ClientLogo03 from '../assets/client-logo-03.svg'
import ClientLogo04 from '../assets/client-logo-04.svg'
import ClientLogo05 from '../assets/client-logo-05.svg'
import ClientLogo06 from '../assets/client-logo-06.svg'
import ClientLogo07 from '../assets/client-logo-07.svg'
import ClientLogo08 from '../assets/client-logo-08.svg'
import ClientLogo09 from '../assets/client-logo-09.svg'
import ClientLogo10 from '../assets/client-logo-10.svg'

function Home() {

  return (
    <div className="Home">

        <Nav linkActive='home' />

        <main>
            <section className='HeroSection'>
                <TextContainer 
                    hyerarchy='hero'
                    title='Make your business smart and connected'
                    paragraph02='Smart integration for logistics administration, transport and warehouses. Grow up your business with smart and eficiency.'
                    button={<Button
                        styleType='default'
                        children='Try Now'
                    />}
                />
                <img src={HeroImg}/>
            </section>

            <aside className="clients">
                <img src={ClientLogo01}/>
                <img src={ClientLogo02}/>
                <img src={ClientLogo03}/>
                <img src={ClientLogo04}/>
                <img src={ClientLogo05}/>
                <img src={ClientLogo06}/>
                <img src={ClientLogo07}/>
                <img src={ClientLogo08}/>
                <img src={ClientLogo09}/>
                <img src={ClientLogo10}/>
            </aside>

        </main>

    </div>
  )
}

export default Home
