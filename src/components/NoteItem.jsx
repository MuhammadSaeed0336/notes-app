import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {
  return (
    <div className='note'>
      <Link to={`/edit-note/${note.id}`}>
        <h4>{note.title.length > 50 ? (note.title.substr(0, 50)) + "...": note.title }</h4>
        <p>{note.details.length > 100 ? (note.details.substr(0, 100)) + "...": note.details }</p>
        <p>{note.date}</p>
      </Link>
    </div>
  )
}

export default NoteItem
