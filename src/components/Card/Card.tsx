import './Card.css'

interface Props {
    style?: 'default' | 'default-center' | 'no-background' | 'no-background-center'
    icon?: React.ReactNode
    title?: string
    content?: string
}

export default function Card(props: Props) {

    let styleProp = 'card'

    if (props.style === 'default-center') {
        styleProp = 'card-center'
    } else if (props.style === 'no-background') {
        styleProp = 'card-no-background'
    } else if (props.style === 'no-background-center') {
        styleProp = 'card-no-background-center'
    } else {
        styleProp = 'card'
    }

    return (
        <div className={styleProp}>
            <div className='icon-wrap'>{props.icon}</div>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}