import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import './Cardarea.scss'
const Cardarea = (props) => {

    let cards

    const populateCards = () => {
        if (props.data.length > 0) {
            cards = props.data.map(job => {
                return (
                    <Link
                        to={`/moreinformation`}
                        key={job.id}
                        onClick={() => {
                            props.select(job.id)
                        }}>
                        <Card
                            data={job}
                            theme={props.theme}
                        />
                    </Link>
                )
            })
            return cards
        } else {
            return null
        }
    }

    const renderButton = () => {
        if (props.data.length === 12) {
            return (
                <div className="button-area">
                    <button onClick={props.moreData}>
                        Load More
                    </button>
                </div>
            )
        } else if (props.data.length > 12) {
            return
        }
    }

    return (
        <>
            <section className="cards">
                {
                    populateCards()
                }
            </section>
            {
                renderButton()
            }
        </>
    )
}

export default Cardarea
