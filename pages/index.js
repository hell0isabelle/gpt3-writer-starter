import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>leaf of faith. </title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>leaf of faith</h1>
          </div>
          </div>
          <div className="header-subtitle">
            <h2>a new cannabis dictionary</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea placeholder="start typing here"
          className="prompt-box"
          value={userInput}
          onChange={onUserChangedText} />;
          <div className="prompt-buttons">
          <a className="generate-button" onClick={callGenerateEndpoint}>
          <div className="generate">
          <p>Generate</p>
      </div>
    </a>
        </div>
        <div className="prompt-buttons">
  <a
    className={isGenerating ? 'generate-button loading' : 'generate-button'}
    onClick={callGenerateEndpoint}
  >
    <div className="generate">
    {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
    </div>
  </a>
</div>-
        {apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h3>Output</h3>
      </div>
    </div>
    <div className="output-content">
      <p>{apiOutput}</p>
    </div>
  </div>
)}
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>buildspace x isabelle, with love from boston</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
