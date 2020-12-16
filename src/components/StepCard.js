import styled from 'styled-components'

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 20px;
  margin: 20px;
  max-width: 200px;
  border-radius: 10px;
`

export default function StepCard () {
  return (
    <Card>
      <h3>1. Crie seu sorteio</h3>
      <p>Digite seu nome e e-mail, e crie o seu sorteio de forma fácil e sem complicações.</p>
    </Card>
  )
}