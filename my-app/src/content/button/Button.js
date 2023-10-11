const Button =(props)=>{
    const handleClick=()=>{
        props.setState(!props.state?.isOpen)
    }
    
    return (
        <>
        <button className={props.className} onClick={handleClick}><i className={props?.icon}></i>{props.name} </button>
        </>
    )
}
export default Button;