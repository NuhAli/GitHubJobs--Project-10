import React from 'react'
import './Cardtitle.scss'

const Cardtitle = (props) => {

    const {
        company,
        company_url,
        company_logo
    } = props.jobInfo[0]

    return (
        <section className={`header__card header__card--${props.theme}`}>
            <div className="header__card__container">
                <img 
                    src={company_logo} alt="logo"
                    className="header__card__logo" 
                />
                <div className="header__card__title-area">
                    <div className="header__card__title-area--text">
                        <h2>{company}</h2>
                        <p>{company_url}</p>
                    </div>
                    <div className="header__card__title-area--button">
                        <a href={company_url}>
                            <button>
                                Company site
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cardtitle
