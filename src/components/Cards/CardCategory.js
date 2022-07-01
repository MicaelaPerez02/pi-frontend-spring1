import React from 'react';
import '../../styles/Components/Categories.css';
import {Link} from 'react-router-dom';

function CardCategory(props) {
    return (
        <div className="cardCategory" key={props.id}>
            <Link to={"/category/" + props.title}>
                <img className='categoryImg' src={props.url} alt={props.title} />
            </Link>
            <p className='categoryTitle'>{props.title}</p>
            <p className='categoryDescription'>{props.title}{props.description}</p> 
        </div>
    )
}

export default CardCategory;