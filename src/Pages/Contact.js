import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Contact = () => {
  const [quotes, setQuotes] = useState([]);

  const getApiData = async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/quotes"
      ).then((res) => res.json());
      // Inspect the response structure
      console.log("API data: ", response);
      setQuotes(response?.data?.data || []); // Adjusting for structure
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {quotes.map((quote, index) => (
          <div key={index}>
            <h3>{quote.quoteText}</h3> {/* Use actual quote data */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Contact;
