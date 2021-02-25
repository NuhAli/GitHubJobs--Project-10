import React from 'react'
import lightIcon from '../../utilities/desktop/icon-sun.svg'
import darkIcon from '../../utilities/desktop/icon-moon.svg'

const ThemeSwitcher = (props) => {
    return (
        <div className="header__theme-switcher">
            <img src={lightIcon} className="header__theme-icon" alt="light icon" />
            <label className="header__switch">
                <input type="checkbox" className="header__input" onChange={props.handleCheck} />
                <span className="header__slider header__slider--round"></span>
            </label>
            <img src={darkIcon} className="header__theme-icon" alt="dark icon" />
        </div>
    )
}

export default ThemeSwitcher
