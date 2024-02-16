import EstiloGlobal, { Container } from '../../styles'
import { Titulo } from '../Titulo/styles'
import { Formulario } from './styles'

const Hero = () => (
  <Formulario>
    <EstiloGlobal />
    <Container>
      <Titulo>
        As melhores vagas para tecnologia, design e artes visuais.
      </Titulo>
    </Container>
  </Formulario>
)

export default Hero
