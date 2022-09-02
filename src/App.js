import './App.css';
import { ethers } from "ethers";

function App() {
  const connect=async ()=>{
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  let res = await provider.send("eth_requestAccounts", []);
  console.log(res);
  }
  const getData=()=>{
    const options = {method: 'GET', headers: {Accept: 'application/json'}};

    fetch('https://api.opensea.io/api/v1/collections?asset_owner=0x943590A42C27D08e3744202c4Ae5eD55c2dE240D&offset=0&limit=10', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };
  const getAssetData=()=>{
    const options = {method: 'GET'};

fetch('https://api.opensea.io/api/v1/asset/0xa49a0e5eF83cF89Ac8aae182f22E6464B229eFC8/1/?include_orders=false', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <button onClick={connect}>Connect To MetaMask</button>
      <button onClick={getData}> Get Data</button>
      <button onClick={getAssetData}>Get Asset Data</button>
    </div>
  );
}

export default App;