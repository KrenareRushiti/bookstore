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
    <h1><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZr-pcbCnZllW16TI1VWPGSYspw6pdasOv4AZeavvAwJSrOZ4qRza2ykzyrL-KXnwI6Jo&usqp=CAU' alt=''  style={{ width: "auto", height: "auto", maxWidth: "70px", maxHeight: "70px", marginTop: "40px", marginLeft: "600px" }}/></h1>
      <Container className="quotes-container">
        <Row>
          {
            quotes && quotes.data.data.map((d) =>  (

              <Col sm={12} md={6} lg={6} key={d.id} className='my-3'>
               <Card>
                     <Card.Body className='quotesCard'>
                          <blockquote className="blockquote mb-0">
                            <p>
                              {' '}
                              <Card.Text className='quotesText'>{d.content}</Card.Text>
                          </p>
                          <footer className="blockquoteFooter">
                              -  {d.author || "Unknown"}
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



