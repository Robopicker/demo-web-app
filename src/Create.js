import { Button, Container, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

export default function Create() {
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [note, setNotes] = useState('')
    const [category, setCategory] = useState('')
    const history = useHistory()

    const submitNotes = (e) => {
        e.preventDefault()
        if (title && note && category) {
            fetch('http://localhost:3000/notes', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ title, note, category })
            }).then(() => {
                history.push('/')
            })
        }
    }
    return (
      <Container size="sm">
        <Typography variant="h2" color="secondary"> Create Note </Typography>
        <form noValidate autoComplete="off" onSubmit={submitNotes}>
            <TextField 
            onChange={(e) => {setTitle(e.target.value)}}
            className={classes.field} 
            value={title}
            placeholder='Add Title' 
            variant='outlined'
            color='secondary' 
            fullWidth />
            <br />
            <TextField
            onChange={(e) => { setNotes(e.target.value)}}
            className={classes.field}
            placeholder='Add Notes'
            variant='outlined'
            color='secondary'
            multiline
            rows={5}
            fullWidth
            />
            <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup> 
        </FormControl>
        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          endIcon={<KeyboardArrowDown />}>
          Submit
        </Button>  
       </form> 
      </Container>
    );
}
