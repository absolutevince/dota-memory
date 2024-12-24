import { useEffect, useState } from "react";
import Header from "./components/container/header";
import Main from "./components/container/main";
import "./index.css";
import fetchImages from "./utils/fetchImages";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages((images) => {
      setImages(images);
    });
  }, []);

  return (
    <div className="w-full bg-slate-900 text-slate-100">
      <Header />
      <Main images={images} />
    </div>
  );
}

export default App;
