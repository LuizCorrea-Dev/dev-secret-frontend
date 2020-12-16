import styled from 'styled-components'

import StepCard from './StepCard'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

export default function Steps () {
  return (
    <>
      <H1>Como funciona?</H1>
      <Container>
        <StepCard />
        <StepCard />
        <StepCard />
      </Container>
    </>
  )
}