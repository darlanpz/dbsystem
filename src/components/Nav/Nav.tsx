import './Nav.css'

import Logo from  '../../assets/logo.svg'
import Button from '../Button/Button'

interface Props {
    linkActive?: 'home' | 'about' | 'features' | 'modules' | 'help'
}

export default function Nav(props: Props) {

    return (
        <div className="navContainer">
            <nav className='nav'>
                <div className='nav-links'>
                    <a href="">
                        <img src={Logo} alt="Logo Propulsor" />
                    </a>
                    <a href="#" className={props.linkActive==='home'?'nav-link-active':''}>Home</a>
                    <a href="#" className={props.linkActive==='about'?'nav-link-active':''}>About</a>
                    <a href="#" className={props.linkActive==='features'?'nav-link-active':''}>Features</a>
                    <a href="#" className={props.linkActive==='modules'?'nav-link-active':''}>Modules</a>
                    <a href="#" className={props.linkActive==='help'?'nav-link-active':''}>Help</a>
                </div>
                <div className="nav-actions">
                    <Button 
                        styleType='nav'
                        children="Try Now"
                    />
                    <Button 
                        styleType='link'
                        children='Login'
                    />

                </div>
            </nav>
        </div>
    )

}