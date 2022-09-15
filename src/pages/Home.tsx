import './Home.css'

import Hero from  '../sections/Hero/Hero'
import About from '../sections/About/About'
import Social from '../sections/Social/Social'

import Nav from '../components/Nav/Nav'

function Home() {

  return (
    <div className="Home">

        <Nav linkActive='home' />

        <main>
            <Hero 
                title='Make your business smart and connected'
                content='Smart integration for logistics administration, transport and warehouses. Grow up your business with smart and eficiency.'
            />

            <Social/>

            <About
              title='Specialized in Transport and Logistics'
              paragraph01='Solution platform for the Transport and Logistics sector. The system has modules for carriers, transport cooperatives and for the warehousing control branch.'
              paragraph02='With the DNA of international transport, the system allows for the effective management of all costs. Each module has complete tools for each customer profile.'
            />

        </main>

    </div>
  )
}

export default Home
