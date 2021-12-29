import React from 'react'
import CollectionCard from './CollectionCard'
import "./CloneList.css"
function CloneList({cloneListData, setSelectedNft}) {
  return (
    <div className="cloneList">
      {cloneListData.map(clone => (
        <div onClick={() => setSelectedNft(clone.token_id)}>
         <CollectionCard
         id={clone.token_id}
         name={clone.name}
         traits={clone.traits}
         image={clone.image_original_url}
         /> 
        </div>
      ))}
    </div>
  )
}

export default CloneList
