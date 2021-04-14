import React from 'react'
import { Link } from 'react-router-dom'
import Headerform from '../Headerform/Headerform'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import Cardtitle from '../Cardtitle/Cardtitle'
import './Topbanner.scss'

const Topbanner = (props) => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" onClick={props.clear}>
                    <h1 className="header__title">
                        devjobs
                    </h1>
                </Link>
                <ThemeSwitcher
                    handleTheme={props.handleTheme}
                />
            </div>
            {
                props.jobInfo.length > 0 ?
                <Cardtitle
                    jobInfo={props.jobInfo}
                    theme={props.theme}
                />:
                <Headerform
                theme={props.theme}
                searchQuery={props.searchQuery}
                searchLocation={props.searchLocation}
                workType={props.workType}
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
            />
            }
        </header>
    )
}

export default Topbanner