import { useState } from 'react'

import { Button } from '../UI/Button'
import { Card } from '../UI/Card'

import { Container, Form, Input, Label } from './styles'

const DEFAULT_INPUT_STATE = {
  title: '',
  episode: '',
  airDate: '',
}

export const MovieForm = ({ addMovie }) => {
  const [inputsForm, setInputsForm] = useState(DEFAULT_INPUT_STATE)

  const handleInputTitle = (e) => {
    setInputsForm((prevInputs) => {
      return {
        ...prevInputs,
        title: e.target.value,
      }
    })
  }
  const handleInputEpisode = (e) => {
    setInputsForm((prevInputs) => {
      return {
        ...prevInputs,
        episode: e.target.value,
      }
    })
  }
  const handleInputAirDate = (e) => {
    setInputsForm((prevInputs) => {
      return {
        ...prevInputs,
        airDate: e.target.value,
      }
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    const movie = {
      name: inputsForm.title,
      episode: inputsForm.episode,
      airDate: inputsForm.airDate,
    }

    addMovie(movie)
    setInputsForm(DEFAULT_INPUT_STATE)
  }

  return (
    <section>
      <Card>
        <Form onSubmit={handleSubmitForm}>
          <Container>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={inputsForm.title} onChange={handleInputTitle} />
          </Container>
          <Container>
            <Label htmlFor="episode">Episode</Label>
            <Input id="episode" value={inputsForm.episode} onChange={handleInputEpisode} />
          </Container>
          <Container>
            <Label htmlFor="airDate">Air Date</Label>
            <Input id="airDate" value={inputsForm.airDate} onChange={handleInputAirDate} />
          </Container>
          <Button>Add Movie</Button>
        </Form>
      </Card>
    </section>
  )
}
