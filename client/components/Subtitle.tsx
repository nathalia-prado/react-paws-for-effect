interface Props {
    text: string
}

function Subtitle(props: Props) {
    return (
        <h1>{props.text}</h1>
    )
}

export default Subtitle