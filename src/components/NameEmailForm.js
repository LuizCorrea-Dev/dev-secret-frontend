import { useState } from 'react'

import styled from 'styled-components'

import Input from './Input'
import Button from './Button'

  const Form = styled.form`
    flex: 1;
    display: flex;
    max-width: 900px;
    padding: 20px;

    @media (max-width: 500px) {
      flex-direction: column;
    }

    > input, button {
      margin: 10px;
    }
  `

function NameEmailForm ({ buttonText, onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // impede que o evento atualize a página
    onSubmit({name, email})
    setName('')
    setEmail('')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input 
        placeholder="Digite seu nome" 
        required 
        value={name} 
        onChange={({target}) => setName(target.value)} 
      />
      <Input 
        type="email" 
        placeholder="Digite seu melhor email" 
        required
        value={email} 
        onChange={({target}) => setEmail(target.value)} 
      />
      <Button type="submit">{buttonText}</Button>
    </Form>
  )
}

NameEmailForm.defaultProps = {
  buttonText: "Criar",
  onSubmit: () => {}
}

export default NameEmailForm