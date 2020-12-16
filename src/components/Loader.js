import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const LoaderDiv = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default function Loader () {
  return <Container><LoaderDiv /></Container>
}