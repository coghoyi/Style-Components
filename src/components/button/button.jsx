import { StyledButton } from "./styles";

const Button = ({text})=>{
    return (
        <StyledButton 
        color='orange' 
        active={false}
        padding='2rem' 
        onClick={()=> console.log('CLICK')}>Soy un botón</StyledButton>
    )
}
export default Button;