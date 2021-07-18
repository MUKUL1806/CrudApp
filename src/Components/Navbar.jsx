import React from 'react'
import {AppBar,Toolbar,makeStyles} from '@material-ui/core'
import { NavLink } from 'react-router-dom'
const useStyle=makeStyles({
    header:{
        background:'#111111'
    },
    tabs:{
        color:"#FFFFFF",
        textDecoration:'none',
        marginRight:20,
        fontSize:20
    }
})
const Navbar=()=>{
    const classes=useStyle()
   return(
       <AppBar className={classes.header} position="static">
           <Toolbar>
              <NavLink className={classes.tabs} to='/' exact >All Users</NavLink>
              <NavLink className={classes.tabs} to='/add' exact>Add User</NavLink>
           </Toolbar>
       </AppBar>
   )
}
export default Navbar