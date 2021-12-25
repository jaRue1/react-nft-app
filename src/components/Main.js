import React from "react"
import ownerImage from "../assets/blue-cover-2.png"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { useState, useEffect } from "react"
import "./Main.css"
function Main({ selectedNft, cloneListData }) {
  const [activeNft, setActiveNft] = useState(cloneListData[0])
  useEffect(() => {
    setActiveNft(cloneListData[selectedNft])
  }, [cloneListData, selectedNft])
  return (
    <div className="main">
      <div className="mainContent">
        <div className="nftHighlight">
          <div className="nftContainer">
            <img
              className="selectedNft"
              src={activeNft.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="nftDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activeNft.name}
            <span className="itemNumber"> .#{activeNft.token_id}</span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activeNft.owner.profile_img_url} alt="" />
            </div>

            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div className="ownerAddress">{activeNft.owner.address}</div>
                <div className="ownerHandle">@unkwn</div>
              </div>

              <div className="ownerLink">
                <TwitterIcon className="icon" style={{ fontSize: "50px" }} />
              </div>
              <div className="ownerLink">
                <InstagramIcon className="icon" style={{ fontSize: "50px" }} />
              </div>
              <div className="ownerLink">
                <MoreHorizIcon className="icon" style={{ fontSize: "50px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
