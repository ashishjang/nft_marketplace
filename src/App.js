import "./App.css";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./Components/punkList.js";
import Main from "./Components/Main.js";
function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  const header = {"Access-Control-Allow-Origin":"*"};
  useEffect(() => {
    const getMyNFTs = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xE4C7B90063254c413E34f7f6a31664C0d567f669&order_direction=asc",{headers:header}
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    getMyNFTs();
  }, []);

  return (
    <div className="app">
      <Header />
      {
        
      punkListData.length > 0 && (
        <>
        <Main selectedPunk ={selectedPunk} punkListData = {punkListData}/>
        <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
        
        </>
        )
        
      }
     
    </div>
  );
}

export default App;
