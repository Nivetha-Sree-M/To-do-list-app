import './App.css';
import React, { useState}from 'react';
import Header from './Header';
import Listtodo from './Listtodo';
import History from './history';
import Splash from './splashscreen';
import Login from './Login';
import Signup from './signup';



const App = () =>{

  const [login,setlogin] = useState("")
  const [signup,setsignup] = useState("")

  const handlelogin = e => {
    setlogin(current => !current)
  }

  const handlesignup = e => {
    setsignup(current => !current)
  }




  return(

    <div>

    <div className='top'>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/002/793/186/small_2x/clipboard-with-to-do-list-claim-form-on-it-paper-sheets-check-marks-tick-ok-and-crosses-x-in-the-checkbox-on-the-list-red-pen-isolated-on-light-blue-background-flat-style-design-illustration-vector.jpg"/>
      <p>To-do List</p>
      </div>
      <div className='btns'>
      <button className='login'  type="submit" onClick={handlelogin}>Login</button>
      {login && <Login/>}
      <button className='signup' type="submit" onClick={handlesignup}>Signup</button>
      {signup && <Signup/>}
    </div>

    <div className='first'>
      <div>
      <Splash/>
      </div>
      <div>
      <p className='about'>Organize your work and life,<br></br> Become focused, organized, and calm with Todoist. 
      </p>
      <p className='content'>Creating a to-do list doesn’t have to be another task on your to-do list. Make a to-do list online in a few easy steps. Need a list for your trip to the beach? Are you lining up your team activities for next month’s product launch? Have an organized list with appropriate headings and labels you can customize. Play with fonts, colors, and design elements to make a truly aesthetic to-do list. Then, easily share it online for your team, family, and friends to see and edit in real-time.
</p>
</div>
    </div>


    </div>
  )

}


export default App;
