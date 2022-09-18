import './Modules.css'

import TextContainer from '../../components/TextContainer/TextContainer'
import BackgorundShape from '../../assets/background-shape-1.svg'
import Card from '../../components/Card/Card'
import { Target, Package, Files, Handshake } from 'phosphor-react'

interface CardContent {
  title: string
  content: string
}

const cardData: Array<CardContent> = [
  { title: 'Tracking Manager System', content: 'Real-time merchandise tracking, travel management and scheduling, and multi-company and multi-currency financial manager.' },
  { title: 'Warehouse Manager System', content: 'Inventory, warehouse and distribution center management that integrates the supply chain. Control the hole proccess of store an manage your merchandise.' },
  { title: 'Document Issuer', content: 'Agile issue of the main documents for national and international transport, like MIC/DTA, CRT and CT-e. All de proccess are integrate to the main government systems.' },
  { title: 'Transport Cooperative Manager', content: 'A set of tools for managing transport cooperatives, with tools to streamline related processes. Manage the risk with shared funds to help the cooperative member.' }
]

function Modules() {

  return (
    <section className='full-width'>
        <img src={BackgorundShape} />
        <div className="flex-column modules">
          <TextContainer
            hyerarchy='centered'
            title='Meet the Modules'
            paragraph01='Each module contains the essential tools to manage your business according to your field of activity.'

          />
          <div className="grid-modules">
            <Card
              style='default'
              icon={<Target size={32} color="#8583ff" weight="duotone" />}
              title={cardData[0].title}
              content={cardData[0].content}
            />
            <Card
              style='default'
              icon={<Package size={32} color="#8583ff" weight="duotone" />}
              title={cardData[1].title}
              content={cardData[1].content}
            />
            <Card
              style='default'
              icon={<Files size={32} color="#8583ff" weight="duotone" />}
              title={cardData[2].title}
              content={cardData[2].content}
            />
            <Card
              style='default'
              icon={<Handshake size={32} color="#8583ff" weight="duotone" />}
              title={cardData[3].title}
              content={cardData[3].content}
            />
          </div>
        </div>
    </section>
  )
}

export default Modules
