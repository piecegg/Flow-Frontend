/** @format */

import reactLogo from "./assets/react.svg";
import "./App.css";
import { getOwnedNFTs, getNFTInfo, getNFTMetadatas } from "./Flow/actions";

function App() {
  return (
    <div className='App'>
      <div>
        <a
          href='https://vitejs.dev'
          target='_blank'>
          <img
            src='/vite.svg'
            className='logo'
            alt='Vite logo'
          />
        </a>
        <a
          href='https://reactjs.org'
          target='_blank'>
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => getNFTInfo("1633513171725037568")}>
          Fetch NFT Info
        </button>
        <button onClick={() => getNFTMetadatas()}>
          Fetch Collection Metadatas
        </button>
        <button onClick={() => console.log(getOwnedNFTs("0xb2bf1ae894dc2fc3"))}>
          {" "}
          Fetch Owned NFTs
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
