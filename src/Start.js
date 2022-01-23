import { Typography, Button, Grid, Paper, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import NoteCard from './Notes';
import Notes from './Notes';

export default function Start() {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/notes')
          .then(res => res.json())
          .then(data => setNotes(data))
      }, [])
      const handleDelete = async (id) => {
        await fetch('http://localhost:3000/notes/' + id, {
          method: 'DELETE'
        })
        const newNotes = notes.filter(note => note.id != id)
        setNotes(newNotes)
      }
    console.log("print notes", notes)
    return (
      <Container style={{ backgroundColor: 'red' } }>
        <Grid container spacing={3}>
          {notes.map((item) => <Grid item xs={12} md={3} lg={4}> {<NoteCard note={item} handleDelete={handleDelete} /> }</Grid>)}
        </Grid>
      </Container>
    );
}
