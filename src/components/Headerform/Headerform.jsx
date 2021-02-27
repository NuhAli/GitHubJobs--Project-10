import React from 'react'
import magGlassIcon from '../../utilities/desktop/icon-search.svg';
import locationIcon from '../../utilities/desktop/icon-location.svg';

const Headerform = (props) => {
    return (
        <div className="header__form">
            <div className="header__search-query">
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
            <div className="header__location-query">
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
