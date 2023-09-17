import zen from "../assets/zen.svg"

interface Props {
    className : string
}

const Logo = (props : Props) => {
    return (
        <img
            className={props.className} 
            src={zen} 
        />
    )
}

export default Logo