import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import book_cover from '../images/havana_book.jpg';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="card-container">
            <img src={book_cover} alt="book_image" />
            <div className="desc">
                <h2>
                    <Link to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h2>
                <h3>{book.author}</h3>
                <p>{book.published_date}</p>
            </div>
        </div>
    )
};

export default BookCard;