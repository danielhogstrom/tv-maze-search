import React from 'react';
import './Style.css';

export type ResultType = {
  score: number;
  show: {
    id: number;
    name: string;
    image: {
      medium: string;
      name: string;
    };
    summary: string;
  };
};

interface Props {
  result: ResultType[];
}
export default function Result({ result }: Props) {
  return (
    <div>
      {result?.map((result) => {
        const { show } = result;
        return (
          <div key={show.id} className='Result'>
            <h1>{show.name}</h1>
            <img
              src={show.image?.medium}
              alt={show.image?.name}
              className='Image'
            />
            <h2>Rating: </h2>
            <progress id='score' value={result.score} max='1'></progress>
            <div>{show.summary}</div>
          </div>
        );
      })}
    </div>
  );
}
