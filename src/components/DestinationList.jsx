import React, { useState, useEffect } from "react";
import { fetchDestinationInfo } from "../services/api";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch destination information
    const fetchDestinations = async () => {
      try {
        const response = await fetchDestinationInfo("");
        setDestinations(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching destination data:", error);
        setIsLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h2 className="text-3xl font-semibold text-center">Popular Destinations</h2>

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <MdChevronLeft
            onClick={slideLeft}
            className={`${
              currentIndex === 0 ? "hidden" : "block"
            } absolute left-0 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer `}
            size={35}
          />
          
          <MdChevronRight
            onClick={slideRight}
            className={`${
              currentIndex === destinations.length - 1 ? "hidden" : "block"
            } absolute right-0 bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer  `}
            size={35}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.slice(currentIndex, currentIndex + 3).map((destination) => (
            <div
              key={destination.name.common}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={destination.flags.svg}
                alt={destination.name.common}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-medium">{destination.name.common}</h3>
              <p className="text-gray-700">Capital: {destination.capital}</p>
              <p className="text-gray-700">Population: {destination.population}</p>
              <p className="text-gray-700">Region: {destination.region}</p>
              <p className="text-gray-700">Subregion: {destination.subregion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationList;
