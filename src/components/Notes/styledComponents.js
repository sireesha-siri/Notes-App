// Style your elements here
import styled from 'styled-components'

export const NotesAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  padding-bottom: 100px;
  font-family: 'Roboto';
`
export const NotesHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-size: 50px;

  @media screen and (max-width: 576px) {
    font-size: 30px;
  }
`

export const FormContainer = styled.form`
  box-shadow: 0px 4px 16px 0px #cbd5e1;
  width: 85vw;
  height: 60vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const InputTitle = styled.input`
  border: none;
  outline: none;
  color: #1e293b;
  font-size: 17px;
  width: 100%;
  height: 40px;

  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`

export const TextArea = styled.textarea`
  width: 100%;

  border: none;
  outline: none;
  color: #334155;
  font-size: 17px;
  margin-top: 10px;

  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`
export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const AddButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #4c63b6;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
  margin-right: 30px;
  margin-bottom: 20px;
`
export const NotesContainer = styled.div`
  padding: 30px;
  margin-top: 50px;
`

export const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
export const EmptyNotesImage = styled.img`
  width: 50%;
`

export const NoNotesHeading = styled.h1`
  font-size: 30px;
  color: #334155;
  margin-top: 50px;
  line-height: 0.5;

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`

export const NoNotesDescription = styled.p`
  font-size: 20px;
  color: #475569;

  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`

export const NotesList = styled.ul`
  width: 85vw;
  padding: 20px;
  margin-top: 30px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
