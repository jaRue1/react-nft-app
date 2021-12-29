import "./App.css"
import CollectionCard from "./components/CollectionCard"
import Header from "./components/Header"
import { useState, useEffect } from "react"
import axios from "axios"
import CloneList from "./components/CloneList"
import Main from "./components/Main"
function App() {
  const [cloneListData, setCloneListData] = useState([])
  const [selectedNft, setSelectedNft] = useState([0])
  const [error, setError] = useState(null)
  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xd571dBc8414a629B59134d532524776F001Fb480"
      )
      // https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=newCollectionAddress
      // console.log(openSeaData.data.assets)
      console.log(cloneListData)
      setCloneListData(openSeaData.data.assets)
    }
    return getMyNfts()
  }, [])
  return (
    <div className="app">
      <Header />
      {cloneListData.length > 0 && (
        <>
          (<Main selectedNft={selectedNft} cloneListData={cloneListData} />
          <CloneList
            cloneListData={cloneListData}
            setSelectedNft={setSelectedNft}
          />
          )
        </>
      )}
    </div>
  )
}

export default App
