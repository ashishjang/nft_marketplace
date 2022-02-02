import React from "react";
import weth from "../assets/weth.png";
import "./collectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="" />
      <div className="collectionCardInfo">
        <div className="name">{name}</div>
        <div className="id">.#{id}</div>
        <div className="collectionCardPrice">
          <img src={weth} alt="" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
