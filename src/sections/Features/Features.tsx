import './Features.css'

import Card from '../../components/Card/Card'
import { BoundingBox, CurrencyCircleDollar, CloudArrowUp, Lifebuoy } from 'phosphor-react'

interface CardContent {
  title: string
  content: string
}

const cardData: Array<CardContent> = [
  { title: 'Integration', content: 'Integrated into government systems like Siscomex Single Portal, Siscoserv and SINTIA.' },
  { title: 'No Initial Investment', content: 'As a service, you can use the system in the form of a monthly fee with support included.' },
  { title: 'Fully Web', content: 'Works through the web browser and any device with no minimum requirements.' },
  { title: 'Support', content: 'Specialized professionals and a complete infrastructure of software and hardware.' }
]

function Features() {

  return (
    <section className='flex-row'>
        <Card
          style='default'
          icon=< BoundingBox size={32} />
          title={cardData[0].title}
          content={cardData[0].content}
        />
        <Card
          style='default'
          icon=< CurrencyCircleDollar size={32} />
          title={cardData[1].title}
          content={cardData[1].content}
        />
        <Card
          style='default'
          icon=< CloudArrowUp size={32}  />
          title={cardData[2].title}
          content={cardData[2].content}
        />
        <Card
          style='default'
          icon=< Lifebuoy size={32} />
          title={cardData[3].title}
          content={cardData[3].content}
        />
    </section>
  )
}

export default Features
