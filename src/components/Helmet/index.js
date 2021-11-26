function Helmet(props) {
    document.title = 'Apple ' + props.title;
    return (
        <>
            {props.children}
        </>
    )
}

export default Helmet
