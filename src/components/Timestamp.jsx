function Timestamp(props) {
    const { timestamp } = props.tweet

    return (
        <span className="timestamp">{timestamp}</span>
    )
}

export default Timestamp;