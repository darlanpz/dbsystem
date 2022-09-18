import './Profiles.css'

import TextContainer from '../../components/TextContainer/TextContainer'
import Card from '../../components/Card/Card'
import BackgorundShape from '../../assets/background-shape-2.svg'
import {
  UsersThree,
  Check,
  Truck,
  IdentificationCard,
  Rows,
  Target,
  Package,
  Files,
  Handshake
} from 'phosphor-react'

interface Props {
  
}

function Profiles() {

  return (
    <section className='full-width'>
        <div className="flex-column modules">
          <TextContainer
            hyerarchy='centered'
            title='A Profile Made for You'
            paragraph01='The booster platform allows you to have a profile with all the tools you need.'

          />

          <div className="grid">
            <div className="empty"></div>
            <Card
              style='no-background-center'
              icon={<UsersThree size={32} />}
              title='Transport cooperative'
            />
            <Card
              style='no-background-center'
              icon={<Truck size={32} />}
              title='Shipping Company'
            />
            <Card
              style='no-background-center'
              icon={<IdentificationCard size={32} />}
              title='Shipping Agent'
            />
            <Card
              style='no-background-center'
              icon={<Rows size={32} />}
              title='Logistic Operator'
            />

            <div className="module-icon">
              <Target size={48} weight='duotone' color='#8583FF' />
            </div>

            <div className="check">
              <Check size={48} color='#8583FF' />
            </div>

            <div className="check">
              <Check size={48} color='#8583FF' />
            </div>

            <div className="check">
              <Check size={48} color='#8583FF' />
            </div>

            <div className="check">
              <Check size={48} color='#8583FF' />
            </div>

            <div className="module-icon">
              <Package size={48} weight='duotone' color='#8583FF' />
            </div>

            <div className="check">
              <Check size={48} color='#8583FF' />
            </div>

            <div className="check">
              <Check size={48} color='#8583FF' />
            </div>

            <div className="check">
              {/* <Check size={48} color='#8583FF' /> */}
            </div>

            <div className="check">
              {/* <Check size={48} color='#8583FF' /> */}
            </div>

            <div className="module-icon">
              <Files size={48} weight='duotone' color='#8583FF' />
            </div>

            <div className="check">
              <Check size={48} color='#8583FF' />
            </div>

            <div className="check">
              <Check size={48} color='#8583FF' />
            </div>

            <div className="check">
              <Check size={48} color='#8583FF' />
            </div>

            <div className="check">
              {/* <Check size={48} color='#8583FF' /> */}
            </div>

            <div className="module-icon">
              <Handshake size={48} weight='duotone' color='#8583FF' />
            </div>

            <div className="check">
              <Check size={48} color='#8583FF' />
            </div>

            <div className="check">
              {/* <Check size={48} color='#8583FF' /> */}
            </div>

            <div className="check">
              {/* <Check size={48} color='#8583FF' /> */}
            </div>

            <div className="check">
              <Check size={48} color='#8583FF' />
            </div>

          </div>
        </div>
        <img src={BackgorundShape} />
    </section>
  )
}

export default Profiles
