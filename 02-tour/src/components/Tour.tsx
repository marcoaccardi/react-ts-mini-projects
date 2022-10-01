import React, { useState } from "react";

export interface Data {
  tours: {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
  }[];
}

interface TourProps {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  removeTour: (id: string) => void;
}

export const Tour: React.FC<TourProps> = ({
  id,
  name,
  info,
  image,
  price,
  removeTour,
}) => {
  const [readMore, setReadMore] = useState<boolean>(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={(): void => setReadMore(!readMore)}>
          {readMore ? "show less" : "read more"}
        </button>
        <button
          className='delete-btn'
          onClick={() => {
            removeTour(id);
            console.log(id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};
