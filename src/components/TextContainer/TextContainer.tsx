import './TextContainer.css'

interface Props {
    hyerarchy: 'hero' | 'subheading' | 'centered'
    title: string
    paragraph01?: string
    paragraph02?: string
    button?: React.ReactNode
}

export default function TextContainer(props: Props) {

    if (props.hyerarchy === 'hero') {
        return (
            <div className="textContainer hero">
                <h1>{props.title}</h1>
                <p>{props.paragraph01}</p>
                <p className="p-secondary">{props.paragraph02}</p>
                {props.button}
            </div>
        )
    } else if (props.hyerarchy === 'subheading') {
        return (
            <div className="textContainer">
                <h2>{props.title}</h2>
                <p>{props.paragraph01}</p>
                <p className="p-secondary">{props.paragraph02}</p>
                {props.button}
            </div>
        )
    } else {
        return (
            <div className="centered">
                <h2>{props.title}</h2>
                <p>{props.paragraph01}</p>
                <p className="p-secondary">{props.paragraph02}</p>
                {props.button}
            </div>
        )
    }

}