import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    const {id, name, image, likes} = this.props.toy
    const {handleDonation, handleLike} = this.props

    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick={() => handleLike(id)} className="like-btn">Like {'<3'}</button>
        <button onClick={() => handleDonation(id)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
