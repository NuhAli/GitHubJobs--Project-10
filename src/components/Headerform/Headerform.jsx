import React from 'react'
import magGlassIcon from '../../utilities/desktop/icon-search.svg';
import locationIcon from '../../utilities/desktop/icon-location.svg';

const Headerform = () => {
    return (
        <div className="header__form">
            <div className="header__search-query">
                <img
                    src={magGlassIcon}
                    alt="looking glass"
                />
                <input
                    type="text"
                    name="searchQuery"
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
                    name="locationQuery"
                    className="header__location-query"
                    placeholder="Filter by location ..."
                />
            </div>
            <div className="header__search-params">
                <label className="header__checkbox">
                    <input
                        type="checkbox"
                        name="workType"
                    />
                    <span>Full Time Only</span>
                </label>
                <div className="header__search-btn">
                <button>
                    Search
                </button>
                </div>
            </div>
        </div>
    )
}

export default Headerform
