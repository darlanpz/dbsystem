import './Hero.css'

import TextContainer from '../../components/TextContainer/TextContainer'
import Button from '../../components/Button/Button'
import HeroImg from '../../assets/hero.svg'

interface Props {
  title: string
  content: string
}

function Hero(props: Props) {

  return (
    <section className='flex-row'>
        <TextContainer 
            hyerarchy='hero'
            title={props.title}
            paragraph02={props.content}
            button={<Button
                styleType='default'
                children='Try Now'
            />}
        />
        <img src={HeroImg}/>
    </section>
  )
}

export default Hero
