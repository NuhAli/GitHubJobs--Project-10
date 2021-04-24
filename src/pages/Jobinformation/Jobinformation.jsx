import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import DOMPurify from 'dompurify'
import './Jobinformation.scss'
import { BsDot } from 'react-icons/bs'

const Jobinformation = (props) => {

    const {
        created_at,
        type,
        company_url,
        location,
        title,
        description,
        how_to_apply
    } = props.jobInfo[0]

    const { theme } = props

    return (
        <>
            <section className="description">
                <div className={`description__container description__container--${theme}`}>
                    <div className="description__top-banner">
                        <div className="job-details">
                            <div className="row">
                                <p>
                                    {
                                        <ReactTimeAgo date={created_at} timeStyle="round-day" />
                                    }
                                </p>
                                <BsDot className="dot" />
                                <p>{type}</p>
                            </div>
                            <div className="row title">
                                <h3 className="job-title">
                                    {title}
                                </h3>
                            </div>
                            <div className="row">
                                <p className="job-location">
                                    {location}
                                </p>
                            </div>
                        </div>
                        <div className="description__top-banner__apply">
                            <button> Apply Now</button>
                        </div>
                    </div>
                    <div
                        className="description__details"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(description)
                        }}>
                    </div>
                    <div className="description__bottom-banner"></div>
                </div>
                <div className="description__apply">
                    <h3>How to apply</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, officiis illo hic, impedit totam enim aliquid ex quasi soluta laborum cupiditate, iure provident alias! Sunt doloribus voluptates voluptatum mollitia debitis!
                    </p>
                    <div
                        className="description__apply-link"
                        dangerouslySetInnerHTML={{
                            __html: how_to_apply
                        }}>
                    </div>
                </div>
                <div className={`bottom-banner bottom-banner--${theme}`}>
                    <div className="bottom-banner__container">
                        <div className="bottom-banner__row">
                            <div className="bottom-banner__job-info">
                                <div className="job-title">
                                    <p>
                                        {title}
                                    </p>
                                </div>
                                <div className="details">
                                    <span>{company_url}</span>
                                </div>
                            </div>
                            <div className="bottom-banner__apply">
                                <button> Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Jobinformation
