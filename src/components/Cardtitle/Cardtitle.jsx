import React from 'react'
import './Cardtitle.scss'

const Cardtitle = (props) => {

    const {
        company,
        company_url,
        company_logo
    } = props.jobInfo[0]

    const { theme } = props

    return (
        <section className={`header-card header-card--${theme}`}>
            <div className="header-card__container">
                <img src={company_logo} alt="logo" className="header-card__logo" />
                <div className="header-card__information">
                    <div className={`header-card__text header-card__text--${theme}`}>
                        <h2>
                            {company}
                        </h2>
                        <p>
                            {company_url}
                        </p>
                    </div>
                    <div className={`header-card__button header-card__button--${theme}`}>
                        <a href={company_url} target="_blank" rel="noreferrer">
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
