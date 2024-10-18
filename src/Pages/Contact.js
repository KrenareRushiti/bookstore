import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Contact = () => {
  const [books, setBooks] = useState([]);

  // Fetch API data
  const getApiData = async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/quotes"
      ).then((res) => res.json());

      // Debugging: Check the structure of the fetched data
      console.log("API response: ", response);

      // Ensure correct data structure
      setBooks(response?.data?.data || []); // Adjust based on the structure
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  // Slick slider settings
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
      {/* Ensure the books array is not empty before rendering */}
      {books.length > 0 ? (
        <Slider {...settings}>
          {books.map((book, index) => (
            <div key={index} className="book-slide">
              {/* Safely check for volumeInfo and imageLinks */}
              {book?.volumeInfo?.imageLinks?.thumbnail ? (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  style={{ width: "100px", height: "150px" }}
                />
              ) : (
                <div>No Image Available</div>
              )}
              <h3>{book?.volumeInfo?.title || "No Title Available"}</h3>
              <p>{book?.volumeInfo?.subtitle || "No Subtitle Available"}</p>
              <p>
                By: {book?.volumeInfo?.authors?.join(", ") || "Unknown Author"}
              </p>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading books...</p>
      )}
    </div>
  );
};

export default Contact;
