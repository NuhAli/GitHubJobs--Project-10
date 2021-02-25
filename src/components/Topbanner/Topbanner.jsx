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
                    handleCheck={props.handleCheck}
                />
            </div>
            <Headerform />
        </header>
    )
}

export default Topbanner