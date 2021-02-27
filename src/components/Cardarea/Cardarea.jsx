import React from 'react'
import Card from '../Card/Card'
import './Cardarea.scss'
const Cardarea = (props) => {
    let cards
    const populateCards = () => {
        if (props.data.length > 0) {
            cards = props.data.map(job => {
                return <Card key={job.id} data={job} />
            })
            return cards
        } else {
            return null
        }
    }


    return (
        <section className="cards">
            {
                populateCards()
            }
        </section>
    )
}

export default Cardarea
