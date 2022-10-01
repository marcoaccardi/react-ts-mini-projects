import React, { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import { Tours } from "./components/Tours";
import { Data } from "./components/Tour";

const data: string = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<Data["tours"]>([]);

  const removeTour = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
    console.log(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(data);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
