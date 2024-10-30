import React from 'react';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';


const AboutUs = () => {
  return (
      <div className='aCard'>
      <Card className='mainCard'>
      <Card.Header><h3>About KBook</h3></Card.Header>
      <Card.Body>
        <Card.Text><em>"Books are the mirrors of the soul." - Virginia Woolf</em></Card.Text>
        <hr/>
        <Card.Text>
          <p>
          At Kbook, we create a welcoming retreat for every book lover—a place where pages turn quietly and stories come to life. Our bookstore is a haven designed for discovery, where each shelf holds a new adventure, a bit of wisdom, or a spark of inspiration.
          Founded with a passion for storytelling and a commitment to community, Kbook brings together literature from across the globe to our local shelves. We believe books are more than words on paper; they’re a source of connection and growth, bridging ideas and people.
          </p>
          <strong>The Heart of Kbook</strong><br></br>
          <p>
          Kbook is more than a place to buy books; it’s a gathering space for readers of all ages and interests. We host book signings, readings, and community events to celebrate the shared love of reading and learning. Our dedicated staff are readers at heart, always ready to help you discover your next favorite read.
          </p>
          <strong>Making Books Accessible for Everyone</strong>
          <p>
          With a range of genres, languages, and authors, our goal is to offer something for everyone. We’re committed to keeping our prices reasonable, with regular discounts and offers because we believe that books should be within reach for all.
          Explore Kbook, where every visit is an opportunity to find a story worth keeping.
          </p>
        </Card.Text>
      </Card.Body>
      </Card>
      <Footer/>
    </div>
  )
}

export default AboutUs
