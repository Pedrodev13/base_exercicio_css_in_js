import { Titulo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Paragrafo = (props: Props) => <Titulo>{props.children}</Titulo>

export default Paragrafo
