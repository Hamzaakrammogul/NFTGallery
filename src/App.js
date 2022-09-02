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
  const getContract=()=>
{
  const options = {method: 'GET'};

fetch('https://api.opensea.io/api/v1/asset_contract/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
const getCollection=()=>{
  const options = {method: 'GET'};

fetch('https://api.opensea.io/api/v1/collection/boredapeyachtclub', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
const getCollectionStats=()=>{
  const options = {method: 'GET', headers: {Accept: 'application/json'}};

fetch('https://api.opensea.io/api/v1/collection/doodles-official/stats', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
const getOwners=()=>{
  const options = {method: 'GET'};

fetch('https://api.opensea.io/api/v1/asset/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/5602/owners?limit=20&order_by=created_date&order_direction=desc', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
const getBundles=()=>{
  const options = {method: 'GET'};

fetch('https://api.opensea.io/api/v1/bundles?owner=0x71CE1c2D828B9Ee63c207bD945B407290f6ABDd5&limit=40&offset=0', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
  return (
    <div className="App">
      <button onClick={connect}>Connect To MetaMask</button>
      <button onClick={getData}> Get Collections</button>
      <button onClick={getAssetData}>Get Asset Data</button>
      <button onClick={getContract}>Retrieve Contract</button>
      <button onClick={getCollection}>Retrieve Collection/slug</button>
      <button onClick={getCollectionStats}>Retrieve Collection/stats</button>
      <button onClick={getOwners}>Retrieve Owner for NFT</button>
      <button onClick={getBundles}>Retrieve Bundles</button>





    </div>
  );
}

export default App;