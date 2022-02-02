import React from "react";
import CollectionCard from "./collectionCard";
import './punkList.css';

const PunkList = ({ punkListData ,setSelectedPunk}) => {
  return (
    <div className="punk-list">
      {punkListData.map( punk => (
        <div onClick={() => setSelectedPunk(punk.token_id)}>
        <div className="punk-list-item">
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          />
        </div>
        </div>
      ))}
    </div>
  
  );
};

export default PunkList;
