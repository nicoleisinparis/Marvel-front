import "./Characters.css";

import { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const imgsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/characters");

        console.log(response.data);
        setData(response.data.results || []);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const currentImgs = data.slice(
    (currentPage - 1) * imgsPerPage,
    currentPage * imgsPerPage
  );

  // Function to handle next page
  const handleNextPage = () => {
    if (currentPage * imgsPerPage < data.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Function to handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return isLoading ? (
    <p>Loading ..</p>
  ) : (
    <>
      <img
        src="https://cdn.marvel.com/content/1x/immortal-thor-desktop.jpg"
        alt="Marvel Characters"
        className="barner"
      />
      <section className="container">
        <h2>Characters</h2>
        <div className="container-chara">
          {currentImgs.map((character) => {
            console.log(character);
            return (
              <div key={character._id} className="character-box">
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />

                <h3>{character.name}</h3>
                <p>{character.description}</p>
              </div>
            );
          })}
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage * imgsPerPage >= data.length}
            >
              Next
            </button>
            <div className="page-number">Page {currentPage}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Characters;
