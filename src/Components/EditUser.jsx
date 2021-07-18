import { FormGroup,FormControl, InputLabel, Input,Button,makeStyles, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import { editUser, getUsers } from '../Service/api'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'
const useStyle=makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        '&>*':{
            marginTop:20
        }
    }
})
const initialValues={
    name:'',
    username:'',
    email:'',
    phone:''
}
const EditUser=()=>{
    const [user,setUser]=useState(initialValues)
    const {name,username,email,phone}=user
    const {id}=useParams()
    const classes=useStyle()
    const history=useHistory()
   
    const loadUserData=async()=>{
        const response=await getUsers(id)
        setUser(response.data)
    }
    useState(()=>{
        loadUserData()
      },[])
    const onChangeValue=(e)=>{
    if(e.target.value!=="")
    setUser({...user,[e.target.name]:e.target.value})
    }

    const editUserDetails=async()=>{
       await editUser(id,user)
       history.push('/')
    }
return(
    <FormGroup className={classes.container}>
        <Typography variant='h4'>Edit User</Typography>
        <FormControl>
              <InputLabel>Name</InputLabel>
              <Input onChange={(e)=>onChangeValue(e)} name='name' value={name}/>
        </FormControl>
        <FormControl>
              <InputLabel>Username</InputLabel>
              <Input onChange={(e)=>onChangeValue(e)} name='username'value={username}/>
        </FormControl>
        <FormControl>
              <InputLabel>Email</InputLabel>
              <Input onChange={(e)=>onChangeValue(e)} name='email'value={email}/>
        </FormControl>
        <FormControl>
              <InputLabel>Phone</InputLabel>
              <Input onChange={(e)=>onChangeValue(e)} name='phone' value={phone}/>
              
        </FormControl>
        <Button onClick={editUserDetails}variant='contained' color='primary'>Edit User</Button>
    </FormGroup>
)
}
export default EditUser