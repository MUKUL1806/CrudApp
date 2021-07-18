import { TableBody, TableCell,Table,TableHead,TableRow,makeStyles, Button } from '@material-ui/core'
import React,{useEffect,useState} from 'react'
import { getUsers,deleteUser } from '../Service/api'
import {Link} from 'react-router-dom'
const useStyle=makeStyles({
    table:{
        width:'90%',
        margin:'50px 0 0 50px'
    },
    thread:{
        '&> *':{
            background:'#000000',
            color:'#FFFFFF',
            fontSize:20
        }
    },
    row:{
        '& >*':{
            fontSize:20
        }
    }
})
const AllUsers=()=>{
    const classes=useStyle();
    const [users,setUsers]=useState([])
    useEffect(()=>{
        getAllUsers()
    },[])
    const getAllUsers=async()=>{
       const response=await getUsers()
       setUsers(response.data)
    }
    const deleteUserData=async(id)=>{
     await deleteUser(id)
     getAllUsers();
    }
return(
    <Table className={classes.table}>
        <TableHead>
            <TableRow className={classes.thread}>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
              {
                  users.map(users=>(
                      <TableRow className={classes.row}>
                          <TableCell>{users.name}</TableCell>
                          <TableCell>{users.username}</TableCell>
                          <TableCell>{users.email}</TableCell>
                          <TableCell>{users.phone}</TableCell>
                          <TableCell>
                              <Button variant='contained'color='primary' style={{marginRight:10}}component={Link} to={`/edit/${users.id}`}>Edit</Button>
                              <Button variant='contained'color='secondary' onClick={()=>deleteUserData(users.id)}>Delete</Button>
                          </TableCell>
                      </TableRow>
                  ))
              }
        </TableBody>
    </Table>
)
}
export default AllUsers