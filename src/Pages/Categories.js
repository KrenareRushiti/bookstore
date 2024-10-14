import React from 'react'
import { useState } from 'react'
//import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Categories = () => {

    let [name, setName] = useState ('');

    function handleInputValue(e) {
        setName(e.target.value)
    }

    const booksTwo = [
        {
            id: 8, 
            title: "The AI edge", 
            Author: "Jep Blount",
            img: "https://m.media-amazon.com/images/I/61DsLCOEu1L._UX246_.jpg",
        },
        {
            id: 9,
            title: "Nexus",
            Author: "Yuval Harari",
            img: "https://m.media-amazon.com/images/I/71l4l6o2drL._SY522_.jpg",
        },
        {
            id: 10,
            title: "The Staff Engineer's Path",
            Author: "Tanya Reilly",
            img: "https://m.media-amazon.com/images/I/813cTBVF1hL._SY522_.jpg",
        },
        {
            id: 11, 
            title: "The Manager's Path",
            Author: "Camille Fournier",
            img: "https://m.media-amazon.com/images/I/718A08ZLseL._SY522_.jpg",
        },
        {
            id: 12,
            title: "Leading Effective Engineering Teams",
            Author: "Addy Osmani",
            img: "https://m.media-amazon.com/images/I/71EpUTENpGL._SY522_.jpg",

        },
        {
            id: 13, 
            title: "Software Architecture", 
            Author: "Neal Ford",
            img: "https://m.media-amazon.com/images/I/81sdcxLtlwL._SY522_.jpg",
        },
        {
            head: "History",
            id: 14, 
            title: "The AI edge", 
            Author: "Jep Blount",
            img: "https://m.media-amazon.com/images/I/61DsLCOEu1L._UX246_.jpg",
        },
        {
            id: 15,
            title: "Nexus",
            Author: "Yuval Harari",
            img: "https://m.media-amazon.com/images/I/71l4l6o2drL._SY522_.jpg",
        },
        {
            id: 16,
            title: "The Staff Engineer's Path",
            Author: "Tanya Reilly",
            img: "https://m.media-amazon.com/images/I/813cTBVF1hL._SY522_.jpg",
        },
        {
            id: 17, 
            title: "The Manager's Path",
            Author: "Camille Fournier",
            img: "https://m.media-amazon.com/images/I/718A08ZLseL._SY522_.jpg",
        },
        {
            id: 18,
            title: "Leading Effective Engineering Teams",
            Author: "Addy Osmani",
            img: "https://m.media-amazon.com/images/I/71EpUTENpGL._SY522_.jpg",

        },
        {
            id: 19, 
            title: "Software Architecture", 
            Author: "Neal Ford",
            img: "https://m.media-amazon.com/images/I/81sdcxLtlwL._SY522_.jpg",
        },
        
    ];


  return (
    <>

            <Form className="d-flex, flex-direction: right">

            
            <input value = {name} onChange={handleInputValue} placeholder = "find your favorite book here" style = {{justifyContent: "center", width: "60%", marginLeft: "20%"}}/>
            <Button variant="outline-warning">Search</Button>
            <p style={{color: "orange", marginLeft: "20%"}}>You looked for: {name}</p>
          </Form>
       
                <h1 className='title' style = {{
                textAlign: "center", 
                marginTop: "20px", 
                paddingBottom: "30px",
                fontSize: "2.5rem",  
                color: "orange", 
                letterSpacing: "1.5px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                fontFamily: "sans-serif",
                
            }}>
                
                Computers & Technology
            </h1>
          <Row xs={1} md={6} className="g-4">
          {booksTwo.map((r,) => (
            <Col key={r.id}>
              <Card>
                <Card.Img className = "cardImg" variant="top" src={r.img} alt=''/>
                <Card.Body>
                  <Card.Title>{r.title}</Card.Title>
                  <Card.Text>
                    {r.Author}
                  </Card.Text>
                  <Card.Text>
                    {r.head}
                  </Card.Text>
                  <Button variant="warning">Add to the card</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </>
        );
    };


export default Categories
