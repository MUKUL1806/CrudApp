
import './App.css';
import Navbar from './Components/Navbar';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import EditUser from './Components/EditUser';
function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={AllUsers}/> 
    <Route exact path="/add" component={AddUser}/>
    <Route exact path='/edit/:id' component={EditUser}/>
    </Switch> 
    
    </Router>
  );
}

export default App;
