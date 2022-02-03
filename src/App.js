import "./App.css";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./Components/punkList.js";
import Main from "./Components/Main.js";

const fetchData = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "__cf_bm=yKmuzU05SMOetU7jwTiGpoMyxRYpytMzYvLOH4tH3jw-1643900914-0-AULkiz9k1LgyQx2f1PuXjLqAgi8qfdC7cDw8gsAb6TGLEq80ARieldZWVer8oZlKU0fWL88syzy3sCQzCocObwU=");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  return fetch("https://testnets-api.opensea.io/assets?asset_contract_address=0xE4C7B90063254c413E34f7f6a31664C0d567f669&order_direction=asc", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  useEffect(() => {
    const getMyNFTs = async () => {
      fetch("https://testnets-api.opensea.io/assets?asset_contract_address=0xE4C7B90063254c413E34f7f6a31664C0d567f669&order_direction=asc")
    .then(response => { if (response.ok){ return response.json()} throw response;})
    .then(data => {setPunkListData(data.assets); console.log(data)})
    .catch(error => console.log('error', error));
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
