import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      console.log(NASA_KEY);
      const url =
        `https://api.nasa.gov/planetary/apod` + `?api_key=${NASA_KEY}`;
      console.log(url);
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data :", data);
          setData(data)
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
      // const today = new Date().toDateString();
      // const localKey = `NASA-${today}`;
      // console.log(localKey);
      // if (localStorage.getItem(localKey)) {
      //   const apiData = JSON.parse(localStorage.getItem(localKey));
      //   console.log(apiData);
      //   setData(apiData);
      //   console.log(data);
      //   console.log("Fetched from cache today");
      //   return;
      // }
      // localStorage.clear();
      // try {
      //   const res = await fetch(url);
      //   console.log(res);

      //   const apiData = await res.json();
      //   console.log(apiData);

      //   localStorage.setItem(localKey, JSON.stringify(apiData));
      //   setData(apiData);
      //   console.log("Fetched from API today");
      //   console.log(apiData);
      // } catch (err) {
      //   console.log(err.message);
      // }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
