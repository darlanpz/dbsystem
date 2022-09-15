import './Card.css'

interface Props {
    icon?: React.ReactNode
    title: string
    content: string
}

export default function Card(props: Props) {

    return (
        <div className="card">
            <div className='icon-wrap'>{props.icon}</div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )

}