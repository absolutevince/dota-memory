import { useEffect, useState } from "react";
import Header from "./components/container/header";
import Main from "./components/container/main";
import Loader from "./components/Loader";
import ErrorMsg from "./components/ErrorMsg";
import "./index.css";
import fetchImages from "./utils/fetchImages";

function App() {
  const [images, setImages] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetchImages((images) => {
        setImages(images);
      });
    } catch (err) {
      setErrorMsg(err);
    }
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      setLoading(false);
    } else {
    }
  }, [images]);

  return (
    <div className="w-full bg-slate-900 text-slate-100">
      {loading && <Loader />}
      {errorMsg && !loading && <ErrorMsg />}
      {!loading && (
        <>
          <Header />
          <Main images={images} />
        </>
      )}
    </div>
  );
}

export default App;
