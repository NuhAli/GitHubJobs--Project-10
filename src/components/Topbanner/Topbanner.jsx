import React from 'react'
import Headerform from '../Headerform/Headerform'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import './Topbanner.scss'

const Topbanner = (props) => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">
                    devjobs
                </h1>
                <ThemeSwitcher
                    handleTheme={props.handleTheme}
                />
            </div>
            <Headerform
                searchQuery={props.searchQuery}
                searchLocation={props.searchLocation}
                workType={props.workType}
                handleChange = {props.handleChange}
                handleSubmit={props.handleSubmit}
            />
        </header>
    )
}

export default Topbanner