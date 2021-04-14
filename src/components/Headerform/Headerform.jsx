import React from 'react'
import magGlassIcon from '../../utilities/desktop/icon-search.svg';
import locationIcon from '../../utilities/desktop/icon-location.svg';

const Headerform = (props) => {
    const {theme} = props

    return (
        <div className={`header__form header__form--${theme}`}>
            <div className={`header__search-query header__search-query--${theme}`}>
                <img
                    src={magGlassIcon}
                    alt="looking glass"
                />
                <input
                    type="text"
                    value={props.searchQuery}
                    name="searchQuery"
                    onChange={props.handleChange}
                    placeholder="Filter by title, companies, expertise ...."
                />
            </div>
            <div className={`header__location-query header__location-query--${theme}`}>
                <img 
                    src={locationIcon}
                    alt="location"
                    className="header__search-icon"
                />
                <input
                    type="text"
                    value={props.searchLocation}
                    name="searchLocation"
                    onChange={props.handleChange}
                    className="header__location-query"
                    placeholder="Filter by location ..."
                />
            </div>
            <div className="header__search-params">
                <label className="header__checkbox">
                    <input
                        type="checkbox"
                        name="workType"
                        value={props.workType}
                        onChange={props.handleChange}
                    />
                    <span>Full Time Only</span>
                </label>
                <div className="header__search-btn">
                <button onClick={props.handleSubmit}>
                    Search
                </button>
                </div>
            </div>
        </div>
    )
}

export default Headerform
