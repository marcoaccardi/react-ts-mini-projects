import React from "react";
import { Tour } from "./Tour";
import { Data } from "./Tour";

interface TourProps extends Data {
  removeTour: (id: string) => void;
}
export const Tours: React.FC<TourProps> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='unerline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour
              name={tour.name}
              info={tour.info}
              image={tour.image}
              price={tour.price}
              key={tour.id}
              removeTour={removeTour}
              id={tour.id}
            />
          );
        })}
      </div>
    </section>
  );
};
