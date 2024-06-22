import { Container } from "./styles";

export function OutputProfileData({ icon: Icon, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest}/>
        </Container>
    )
}