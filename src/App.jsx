import React, {useState} from 'react'
import { Switch,Route } from "react-router-dom"
import './App.scss';
import Cardarea from './components/Cardarea/Cardarea';
import  Topbanner from  './components/Topbanner/Topbanner';
import {Data} from './Data'

function App() {
  const [theme,setTheme] = useState("light")
  const [searchQuery,setSearchQuery] = useState('')
  const [searchLocation,setSearchLocation] = useState('')
  const [workType,setWorkType] = useState(false)
  const [data,setData] = useState("")

  const handleTheme = (e) => {
    const {checked} = e.target
    checked? setTheme("light"): setTheme("dark")
  }

  const handleChange = (e) => {
    const {name,value} = e.target
    if(name === "searchQuery") {
      setSearchQuery(value)
    } else if(name === "searchLocation") {
      setSearchLocation(value)
    } else {
      setWorkType(!workType)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Data.getJobs(searchQuery,searchLocation,workType).then(response => {
      setData(response)
    })
  }

  return (
    <div className={`App App-${theme}`}>
      <Topbanner
        handleTheme={handleTheme}
        theme={theme}
        searchQuery={searchQuery}
        searchLocation={searchLocation}
        workType={workType}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Switch>
        <Route path="/">
          <Cardarea data={data} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
