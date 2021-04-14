import React from 'react';
import Timesince from '../../utilities/Date'
import { BsDot } from 'react-icons/bs'
import './Card.scss';

const Card = (props) => {

    const {
        created_at,
        type,
        company,
        location,
        title,
        company_logo } = props.data
        
        const {theme} = props

    return (
        <div className={`card card--${theme}`}>
            <div className="card__logo">
                <img
                    src={company_logo}
                    alt={company}
                />
            </div>
            <div className="card__container">
                <div className="card__job-info">
                    <div className="card__job-type">
                        <p>{created_at}</p>
                        <span><BsDot /></span>
                        <p>{type}</p>
                    </div>
                    <div className={`card__job-title card__job-title--${theme}`}>
                        <h3>
                            {
                                title
                            }
                        </h3>
                    </div>
                    <div className="card__job-recruiter">
                        <p>
                            {
                                company
                            }
                        </p>
                    </div>
                </div>
                <div className="card__location">
                    <h4>
                        {
                            location
                        }
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Card
