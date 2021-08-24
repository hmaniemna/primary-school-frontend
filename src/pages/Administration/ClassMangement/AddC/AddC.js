import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import './AddC.css'
//import ClassMangement from '../ClassMangement';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
 
  
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
})); 
const AddT = (props) => {
  const classes = useStyles();
  const [id,setID]=useState('');
  const [name,setName]=useState('');
  const [level,setlevel]=useState();
  const [number,setNumber]=useState('');
  const {setOpenPopup}=props;

  const submitClass=()=>{
    Axios.post('http://localhost:3000/api/insert',{
      id:id,name:name,level:level,number:number
    })
    /*setClassList([...classList,
      {name:name,level:level,number:number},
    ]); */
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="body">
           إضافة الأقسام   
        </Typography>
        <form className={classes.form} noValidate>

        <TextField 
            margin="normal"
            required
            fullWidth
            id="level"
            label="مستوى القسم"
            name="level"
            autoComplete="level"
            autoFocus
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={(e)=>{
              setlevel(e.target.value)
            }}
          />
          <TextField
            className=""
            margin="normal"
            required
            fullWidth
            name="name"
            label="إسم القسم"
            type="name"
            id="name"
            autoComplete="name"
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={(e)=>{
              setName(e.target.value)
            }}
          />
                      
          <TextField 
            margin="normal"
            required
            fullWidth
            id="number"
            label="عدد التلاميذ"
            name="number"
            autoComplete="number"
            autoFocus
            InputLabelProps={{style: {fontFamily:'Tajawal'}}}
            inputProps={{min: 0, style: { textAlign: 'right',fontFamily:'Tajawal' }}}
            onChange={(e)=>{
              setNumber(e.target.value)
            }}
          />
          <br/><br/>
          </form>
      
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
<<<<<<< HEAD
            onClick={submitClass}
=======
            onClick={()=>{
              setOpenPopup(false)
              submitClass()
              
            }}
>>>>>>> 2c0b3e2783db02c56b015826c9e8d82209dfd234
          >
            اضافة
          </Button>
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  );
}

export default AddT;