const Generator = (props) => {
    return (
        <div className="btn">
            <button onClick={props.btnFunction}> Generate </button>
        </div>
    )
}

export default Generator;