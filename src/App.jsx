import React, {useState} from 'react'
import { Switch,Route } from "react-router-dom"
import './App.scss';
import  Topbanner from  './components/Topbanner/Topbanner';

function App() {
  const [theme,setTheme] = useState()

  const handleCheck = (e) => {
    const {checked} = e.target
    checked? setTheme("light"): setTheme("dark")
  }

  return (
    <div className="App">
      <Topbanner
        handleCheck={handleCheck}
      />
      <Switch>
        <Route path="/">

        </Route>
      </Switch>
    </div>
  );
}

export default App;
