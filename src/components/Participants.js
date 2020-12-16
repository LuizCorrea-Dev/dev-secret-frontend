import { useRouter } from 'next/router'
import styled from 'styled-components'
import { RiDeleteBin2Fill } from "react-icons/ri"

const H4 = styled.h4`
  text-align: center;
`

const Container = styled.div`
  display: flex;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ParticipantDiv = styled.div`
  display: flex;
  align-items: center;
`
const ParticipantDelete = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`

const Participant = ({name, email, showButton, deleteParticipant}) => (
  <ParticipantDiv>
    {
      showButton && 
      <ParticipantDelete onClick={deleteParticipant}><RiDeleteBin2Fill /></ParticipantDelete>
    }
    {name} ({email})
  </ParticipantDiv>
)

export default function Participants ({ showButton, participants, setParticipants }) {
  const router = useRouter()
  const { id, adminKey } = router.query

  const deleteAPIParticipant = async (participantId) => {
    const { NEXT_PUBLIC_API_URL } = process.env
    return await fetch(`${NEXT_PUBLIC_API_URL}/secret/${id}/participants/${participantId}`, {
      method: 'DELETE',
      headers: new Headers({
        'admin-key': adminKey
      })
    })
  }

  const deleteParticipant = async (id) => {
    const { status } = await deleteAPIParticipant(id)
    if (status === 204)
      setParticipants(participants.filter(({externalId}) => externalId !== id))
  }
  return (
    <>
      <H4>Participantes: </H4>
      <Container>
        {
          participants.length === 0 && <p>Nenhum participante cadastrado ainda.</p>
        }
        {
          participants.map(({name, email, externalId}, key) => {
            return <Participant 
              key={`participant-${key}`}
              name={name}
              email={email}
              showButton={showButton} 
              deleteParticipant={() => deleteParticipant(externalId)}
            />
          })
        }
      </Container>
    </>
  )
}