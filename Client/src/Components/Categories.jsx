import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Categories.css';

function Categories(props) {
  return (
    <Link className="card col-2 mx-auto my-2 px-0" style={{ width: '12rem' }}>
      <img src={props.image} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title text-center">{props.name}</h5>
      </div>
    </Link>

  )
}

export default Categories