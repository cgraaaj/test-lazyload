import ImageContainer from "./ImageContainer";
import Image from "./Image";
import "./styles.css";
import images from "./images.json";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        {images.map((res) => {
          return (
            <div key={res.id} className="wrapper">
              <Image
                src={res.urls.regular}
                thumb={res.urls.thumb}
                height={res.height}
                width={res.width}
                alt={res.alt_description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
