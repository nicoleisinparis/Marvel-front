import "./Comics.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const imgsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-back--gxc5dm2v6kbx.code.run/comics"
        );

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
    <section className="container">
      <h2>Comics</h2>
      <div className="container-comic">
        {currentImgs.map((comic) => {
          console.log(comic);
          return (
            <div key={comic._id} className="comic-box">
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <h3>{comic.title}</h3>
              <p>{comic.description}</p>
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
  );
};

export default Comics;
