import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';





const Quotes = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const response = await fetch ("https://api.freeapi.app/#/%F0%9F%93%A2%20Public%20APIs/getQuotes").then((res)=>res.json());
    console.log ("Api data: ", response);
    setData (response);
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




  return (
    <>
      <Container>
        <Row>
          {
            data && data.map((d) =>  {

              <Col sm={12} md={6} lg={6}>
          <     Card>
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
            })
          }
        </Row>
    </Container>
  </>
)
}



export default Quotes;



