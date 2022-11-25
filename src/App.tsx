import React, { useState, useEffect } from 'react';
import './App.css';
import Result, { ResultType } from './components/Result/Result';
import Search from './components/search/Search';

const App: React.FC = () => {
  const [searchResult, setSearchResult] = useState('');
  const [result, setResult] = useState<ResultType[]>([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchResult}`)
      .then((response) => response.json())
      .then((data) => setResult(data));
  }, [searchResult]);

  return (
    <div className='App'>
      <header className='App-header'>
        <Search setSearchResult={setSearchResult} />
        <Result result={result} />
      </header>
    </div>
  );
};

export default App;
