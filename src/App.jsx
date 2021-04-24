import React, { useState } from 'react'
import { Switch, Route } from "react-router-dom"
import './App.scss';
import Cardarea from './components/Cardarea/Cardarea';
import Topbanner from './components/Topbanner/Topbanner';
import { Data } from './Data'
import Jobinformation from './pages/Jobinformation/Jobinformation';

function App() {
  const [theme, setTheme] = useState("light")
  const [searchQuery, setSearchQuery] = useState('')
  const [searchLocation, setSearchLocation] = useState('')
  const [workType, setWorkType] = useState(false)
  const [data, setData] = useState("")
  const [selectedJob, setSelectedJob] = useState({})
  const [loading,setLoading] = useState(false)

  const handleTheme = (event) => {
    const { checked } = event.target
    checked ? setTheme("dark") : setTheme("light")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "searchQuery") {
      setSearchQuery(value)
    } else if (name === "searchLocation") {
      setSearchLocation(value)
    } else {
      setWorkType(!workType)
    }
  }

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    Data.getJobs(searchQuery, searchLocation, workType).then(response => {
      const slicedResponse = response.slice(0,12)
      setLoading(false)
      setData(slicedResponse)
    })
  }

  const fetchMoreJobs = () => {
    Data.getJobs(searchQuery, searchLocation, workType).then(response => {
      setData(response)
    })
  }

  const selectJob = (key) => {
    const job = data.filter(item => item.id === key)
    setSelectedJob(job)
  }

  const clearSelectedJob = () => {
    setSelectedJob([])
  }

  return (
    <div className={`App App--${theme}`}>
      <Topbanner
        handleTheme={handleTheme}
        theme={theme}
        searchQuery={searchQuery}
        searchLocation={searchLocation}
        workType={workType}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        jobInfo={selectedJob}
        clear={clearSelectedJob}
      />
      <Switch>
        <Route exact path="/">
          <Cardarea
            data={data}
            moreData={fetchMoreJobs}
            theme={theme}
            select={selectJob}
          />
        </Route>
        <Route path={`/moreinformation`}>
          <Jobinformation
            theme={theme}
            jobInfo={selectedJob}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
