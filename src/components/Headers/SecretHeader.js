import { useRouter } from 'next/router'
import styled from 'styled-components'

import ImageContainer from '../Containers/ImageContainer'
import Logo from '../Logo'
import NameEmailForm from '../NameEmailForm'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light};
`

const DivForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export default function SecretHeader ({ onAddParticipant }) {
  const router = useRouter()
  const { id } = router.query

  const handleSubmit = async ({name, email}) => {
    const { NEXT_PUBLIC_API_URL } = process.env
    const data = await fetch(`${NEXT_PUBLIC_API_URL}/secret/${id}/participants`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email
      })
    })
    handleResponse({name, email, response: await data.json()})
  }

  const handleResponse = ({name, email, response}) => {
    if (response.success) {
      onAddParticipant({ name, email, externalId: response.id })
    }
  }

  return (
    <ImageContainer>
      <Container>
        <Logo />
        <p>Você foi convidado para participar deste amigo secreto de Fulano!</p>
      </Container>
      <DivForm>
        <NameEmailForm 
          buttonText="Participar"
          onSubmit={handleSubmit}
        />
      </DivForm>
    </ImageContainer>
  )
}