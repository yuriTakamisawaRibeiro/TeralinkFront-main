import { Container } from './styles';

export function BannerButton({title, loading = false, ...rest}){
    return(
    <Container 
    type="button"
    disabled={loading}
    {...rest}
    >
        {loading ? 'Carregando...' : title}
    </Container>
    )
    
}