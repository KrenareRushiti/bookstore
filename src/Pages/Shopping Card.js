import React from 'react';

const ShoppingCard = ({ cart = [] }) => {  // cart merr një vlerë bosh për të shmangur 'undefined'
    return (
      <div>
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((book) => (
            <div key={book.id}>
              <h3>{book.title}</h3>
              <img src={book.img} alt={book.title} />
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    );
  }

export default ShoppingCard;
