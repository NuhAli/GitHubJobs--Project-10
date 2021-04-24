import React from 'react';
import ReactTimeAgo from 'react-time-ago'
import { GoPrimitiveDot } from 'react-icons/go'
import './Card.scss';

const Card = (props) => {

    const {
        created_at,
        type,
        company,
        location,
        title,
        company_logo } = props.data

    const { theme } = props

    return (
        <div className={`card card--${theme}`}>
            <img
                src={company_logo}
                alt={company}
                className="card__logo"
            />
            <div className="card__container">
                <div className="card__job-info">
                    <div className="card__job-type">
                        <p>
                            {
                                <ReactTimeAgo date={created_at} timeStyle="mini" />
                            }
                        </p>
                        <GoPrimitiveDot id="dot" />
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
