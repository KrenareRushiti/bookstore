import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Quotes = () => {
  const [quotes, setQuotes] = useState("");

  const getApiData = async () => {
    const response = await fetch("https://api.freeapi.app/api/v1/public/quotes").then((res)=>res.json());
    // console.log ("Api data: ", response);
    setQuotes(response);
  };
  
  useEffect (() => {
    getApiData();
  }, [] );


  //"author": "Charles Dickens", "authorSlug": ""","content: "",
  //"dateAdded": "2023-04-14",
  //"dateModified": "2023-04-14",
  //"id": 1,
  //"length": 67,
  //"tags": []

  console.log("QUOTES: ", quotes?.data?.data)
  return (
    <>
      <Container>
        <Row>
          {
            quotes && quotes.data.data.map((d) =>  (

              <Col sm={12} md={6} lg={6} key={d.id}>
               <Card>
                  <Card.Header>Quote</Card.Header>
                     <Card.Body>
                          <blockquote className="blockquote mb-0">
                            <p>
                              {' '}
                              <Card.Text>{d.content}</Card.Text>
                          </p>
                          <footer className="blockquote-footer">
                              {d.author} <cite title="Source Title">{d.dateAdded}</cite>
                          </footer>
                        </blockquote>
                    </Card.Body>
                  </Card>
                </Col>
            ))
          }
        </Row>
    </Container>
  </>
)
}



export default Quotes;



