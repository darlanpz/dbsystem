import './About.css'

import TextContainer from '../../components/TextContainer/TextContainer'
import AboutImg from '../../assets/about.svg'

interface Props {
  title: string
  paragraph01: string
  paragraph02: string
}

function About(props: Props) {

  return (
    <section className='flex-row reverse-flex'>
        <TextContainer 
            hyerarchy='subheading'
            title={props.title}
            paragraph01={props.paragraph01}
            paragraph02={props.paragraph02}
        />
        <img src={AboutImg}/>
    </section>
  )
}

export default About
