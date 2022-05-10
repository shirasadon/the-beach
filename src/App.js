import './App.css';

import React from "react"
import Title from './components/title';
import SubTitle from './components/subtitle';
import Paragraph from './components/paragraph';
function App() {
  return (
    <div className='App'>
      <Title></Title>
      <SubTitle></SubTitle>
      <Paragraph paragraphs={["Hey pal",
"what name would you call a dog that has no both legs?",
"well it does not matter what name you might call him",
"trust me he is not coming!"]} ></Paragraph>
    </div>
  );
}

export default App;
