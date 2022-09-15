import './Button.css'
import { ArrowCircleRight, SignIn } from 'phosphor-react'

interface Props {
    children?: React.ReactNode
    styleType: 'nav' | 'default' | 'link'
}

export default function Button(props: Props) {

    if (props.styleType === 'nav') {
        return (
            <button className='button navButton'>{props.children}<ArrowCircleRight className='icon' size={24} /></button>
        )
    } else if (props.styleType === 'default') {
        return (
            <button className='button defaultButton'>{props.children}<ArrowCircleRight className='icon' size={24} /></button>
        )
    } else {
        return (
            <button className='button linkButton'>{props.children}<SignIn className='icon' size={24} /></button>
        )
    }

}