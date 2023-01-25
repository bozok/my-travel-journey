import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import CardData from './data'

function App() {
    const cards = CardData.map(item => {
        return (
            <Card
                key={item.id}
                imageUrl={item.imageUrl}
                country={item.country}
                mapLink={item.mapLink}
                title={item.title}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <section className="card--list">
                {cards}
            </section>
        </div>
    )
}

export default App