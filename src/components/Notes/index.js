// Write your code here
import {useState} from 'react'
import {v4 as uniqueId} from 'uuid'

import {
  NotesAppContainer,
  NotesHeading,
  FormContainer,
  InputTitle,
  TextArea,
  AddButtonContainer,
  AddButton,
  NotesContainer,
  NoNotesContainer,
  EmptyNotesImage,
  NoNotesHeading,
  NoNotesDescription,
  NotesList,
} from './styledComponents'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const getTitle = event => {
    setTitle(event.target.value)
  }

  const getNote = event => {
    setNote(event.target.value)
  }

  const addNote = event => {
    event.preventDefault()

    const newNote = {
      id: uniqueId(),
      title,
      note,
    }

    setNotesList(prev => [...prev, newNote])
    setTitle('')
    setNote('')
  }

  const getNoNotesView = () => (
    <NoNotesContainer>
      <EmptyNotesImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoNotesHeading>No Notes Yet</NoNotesHeading>
      <NoNotesDescription>Notes you add will appear here</NoNotesDescription>
    </NoNotesContainer>
  )

  const getNotesView = () => (
    <NotesList>
      {notesList.map(each => (
        <NoteItem key={each.id} noteDetails={each} />
      ))}
    </NotesList>
  )

  return (
    <NotesAppContainer>
      <NotesHeading>Notes</NotesHeading>

      <FormContainer onSubmit={addNote}>
        <InputTitle
          type="text"
          placeholder="Title"
          onChange={getTitle}
          value={title}
        />

        <TextArea
          placeholder="Take a Note..."
          onChange={getNote}
          value={note}
          rows="12"
        />

        <AddButtonContainer>
          <AddButton type="submit">Add</AddButton>
        </AddButtonContainer>
      </FormContainer>

      <NotesContainer>
        {notesList.length === 0 ? getNoNotesView() : getNotesView()}
      </NotesContainer>
    </NotesAppContainer>
  )
}

export default Notes
