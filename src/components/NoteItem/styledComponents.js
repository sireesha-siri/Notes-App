// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  border: 1px solid #d8d8d8;
  padding: 10px;
  border-radius: 5px;
  width: 23vw;
  margin-right: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 576px) {
    width: 80vw;
  }
`
export const Title = styled.h1`
  font-size: 18px;
  color: #334155;
  line-height: 0.5;

  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`

export const Note = styled.p`
  font-size: 15px;
  color: #475569;

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`
