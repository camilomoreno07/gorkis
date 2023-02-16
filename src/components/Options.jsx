import React from "react";
import image1 from "../assets/imagen1.jpeg";
import image2 from "../assets/imagen2.jpeg";
import image3 from "../assets/imagen3.jpeg";
import image4 from "../assets/imagen4.jpeg";
import image5 from "../assets/imagen5.jpeg";
import image6 from "../assets/imagen6.jpg";


const Title = ({ title }) => (
  <h1 className="title">{title}</h1>
);

const Options = () => {
  const images = [
    {
      url: image1,
      alt: "Imagen 1",
      subtitle: "Trading"
    },
    {
      url: image2,
      alt: "Imagen 2",
      subtitle: "Informes"
    },
    {
      url: image3,
      alt: "Imagen 3",
      subtitle: "Calculo"
    },
    {
      url: image4,
      alt: "Imagen 4",
      subtitle: "Diseño"
    },
    {
      url: image5,
      alt: "Imagen 5",
      subtitle: "Redaccion"
    },
    {
      url: image6,
      alt: "Imagen 6",
      subtitle: "programacion"
    }
  ];

  return (
    <div className='md:mx-52 py-10 flex flex-col justify-center'>
      <Title title="Algunos de nuestros Freelancers son especialistas en:" />
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-grid-item" key={index}>
            <img src={image.url} alt={image.alt} />
            <p className="image-grid-subtitle">{image.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;