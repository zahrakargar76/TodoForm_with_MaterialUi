import  { useState } from 'react';
import { TextField,Rating,Typography,Modal,Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  background:'pink',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const TodoForm= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [gender, setGender] = useState('');
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, comment , gender ,value,open});
  };

  return (
    
    <form onSubmit={handleSubmit} style={{ width: '300px', margin: 'auto' }}>
        <h1 className=''>Survey Questionnaire</h1>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl component="fieldset" margin="normal">
      <FormLabel component="legend"
      style={{
        fontSize:20,
        color:"black",
        fontWeight:"bold",
      }}
      >Gender</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
     
     

      <TextField
        label="Comments"
        variant="outlined"
        multiline
        rows={3}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Typography component="legend"
      style={{
        fontSize:20,
        fontWeight:"bold",
      }}
      >Score</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
 
      <Button onClick={handleOpen} type="submit" variant="contained" color="success" fullWidth>
        Send
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Tank you, your comment has been registered successfully.
          </Typography>
        </Box>
      </Modal>
    
    </form>
  );
};

export default TodoForm;