import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';

import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from './component/common/PrivateRoute';
import { Home,Location,Demo, Thank, Formfillup, SpecificLocation } from './pages/index';
import Navbar from './component/common/Navbar';
import Register from './pages/Register';
import Profile from './pages/Profile';





function App() {
//   const provider= new GoogleAuthProvider
//   const handlePasswordChange = e => {
//   signInWithPopup(auth,provider).then(
//     (res)=>{
//       const user =res.user
//       console.log(user)
//     }
//   )
// }

// const auth=getAuth()

  return (
    <div className="App">
   {/* <button onClick={handlePasswordChange}>button</button> */}
   <AuthProvider>
<BrowserRouter>
<Switch>
  <Route exact path="/"><Login></Login>
 
  
  </Route>
  <Route exact path="/register"><Register></Register>
 
  
  </Route>
  <Navbar>
  <PrivateRoute exact path="/home" component={Home}>
  </PrivateRoute>
  <PrivateRoute exact path="/formFillup" component={Formfillup}>
  </PrivateRoute>
  <PrivateRoute exact path="/location" component={Location}>
  </PrivateRoute>
  <PrivateRoute exact path="/location/:locationID" component={SpecificLocation}>
  </PrivateRoute>
  <PrivateRoute exact path="/information/" component={Profile}>
  </PrivateRoute>
  <PrivateRoute exact path="/thanks/:id" component={Thank}>
  </PrivateRoute>
  
  </Navbar>
</Switch>
</BrowserRouter>
    
    
    </AuthProvider>
    {/* <Demo></Demo> */}
   
    </div>
  );
}

export default App;
