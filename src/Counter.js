const Counter = (props) => {
    return (
        <>
            {props.counter}
            <button onClick={props.incrementValue}>+</button>
        </>
    )
}

export default Counter;