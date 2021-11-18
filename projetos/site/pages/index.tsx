import styled from 'styled-components'
import Button from '@schultzgabriel/ui/src/components/Button'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return(
    <>
    <Button>
      Clique aqui!
    </Button>
    <Title>My page</Title>
    </>
  )
}
