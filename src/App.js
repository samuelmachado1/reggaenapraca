import React from "react";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";

function App() {
  const portfolioItems = [
    {
      title: "9o Edição",
      description: "14 de Maio de 2016",
      images: [
        "./images/2016_3/rnp9_0reggaenapraca2016.jpg",
        "./images/2016_3/rnp9_0reggaenapraca2016_2.jpg",
        "./images/2016_3/rnp9_0reggaenapraca2016_3.jpg",
        "./images/2016_3/rnp9_0reggaenapraca2016_4.jpg",
        "./images/2016_3/rnp9_0reggaenapraca2016_5.jpg",
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=ZoK7KoYLbC0",
          title: "Calango Rasta",
        },
        {
          url: "https://www.youtube.com/watch?v=uvPAJJVE-Vo",
          title: "Jah Connection",
        },
      ],
    },
    {
      title: "8o Edição",
      description: "20 de Março de 2016",
      images: [
        "./images/2016_2/reggaenapraca8_0.jpg",
        "./images/2016_2/reggaenapraca8_01.jpg",
        "./images/2016_2/reggaenapraca8_02.jpg",
        "./images/2016_2/reggaenapraca8_03.jpg",
        "./images/2016_2/reggaenapraca8_04.jpg",
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=ZoK7KoYLbC0",
          title: "Calango Rasta",
        },
        {
          url: "https://www.youtube.com/watch?v=uvPAJJVE-Vo",
          title: "Jah Connection",
        },
      ],
    },
    {
      title: "7o Edição Espaço Aberto",
      description: "30 de Janeiro de 2016",
      images: [
        "./images/2016/rnpEspAberto_flyer.jpg",
        "./images/2016/rnpEspAberto_01.jpg",
        "./images/2016/rnpEspAberto_02.jpg",
        "./images/2016/rnpEspAberto_04.jpg",
        "./images/2016/rnpEspAberto_05.jpg",
        "./images/2016/rnpEspAberto_06.jpg",
        "./images/2016/rnpEspAberto_07.jpg",
        "./images/2016/rnpEspAberto_08.jpg",
        "./images/2016/rnpEspAberto_09.jpg",
        "./images/2016/rnpEspAberto_021.jpg",
        "./images/2016/rnpEspAberto_022.jpg",
        "./images/2016/rnpEspAberto_023.jpg",
        "./images/2016/rnpEspAberto_024.jpg",
        "./images/2016/rnpEspAberto_025.jpg",
        "./images/2016/rnpEspAberto_026.jpg",
        "./images/2016/rnpEspAberto_027.jpg",
        "./images/2016/rnpEspAberto_028.jpg",
        "./images/2016/rnpEspAberto_029.jpg",
        "./images/2016/rnpEspAberto_011.jpg",
        "./images/2016/rnpEspAberto_012.jpg",
        "./images/2016/rnpEspAberto_013.jpg",
        "./images/2016/rnpEspAberto_014.jpg",
        "./images/2016/rnpEspAberto_016.jpg",
        "./images/2016/rnpEspAberto_017.jpg",
        "./images/2016/rnpEspAberto_018.jpg",
        "./images/2016/rnpEspAberto_019.jpg",
        "./images/2016/rnpEspAberto_010.jpg",
        "./images/2016/rnpEspAberto_031.jpg",
        "./images/2016/rnpEspAberto_032.jpg",
        "./images/2016/rnpEspAberto_033.jpg",
        "./images/2016/rnpEspAberto_034.jpg",
        "./images/2016/rnpEspAberto_036.jpg",
        "./images/2016/rnpEspAberto_037.jpg",
        "./images/2016/rnpEspAberto_038.jpg",
        "./images/2016/rnpEspAberto_039.jpg",
        "./images/2016/rnpEspAberto_030.jpg",
        "./images/2016/rnpEspAberto_040.jpg",
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=ZoK7KoYLbC0",
          title: "Calango Rasta",
        },
        {
          url: "https://www.youtube.com/watch?v=uvPAJJVE-Vo",
          title: "Jah Connection",
        },
      ],
    },
    {
      title: "6o Edição Espaço Aberto",
      description: "04 de Setembro de 2015",
      images: [
        "./images/2015_4/rnp6_flyer.jpg",
        "./images/2015_4/rnp6_01.jpg",
        "./images/2015_4/rnp6_02.jpg",
        "./images/2015_4/rnp6_03.jpg",
        "./images/2015_4/rnp6_04.jpg",
        "./images/2015_4/rnp6_05.jpg",
        "./images/2015_4/rnp6_06.jpg",
        "./images/2015_4/rnp6_07.jpg",
        "./images/2015_4/rnp6_08.jpg",
        "./images/2015_4/rnp6_09.jpg",
        "./images/2015_4/rnp6_010.jpg",
        "./images/2015_4/rnp6_011.jpg",
        "./images/2015_4/rnp6_012.jpg",
        "./images/2015_4/rnp6_013.jpg",
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=ZoK7KoYLbC0",
          title: "Calango Rasta",
        },
        {
          url: "https://www.youtube.com/watch?v=uvPAJJVE-Vo",
          title: "Jah Connection",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfólio Reggae na Praça</h1>

        {portfolioItems.map((item, index) => (
          <div className="portfolio-item" key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Carousel className="carousel">
              {item.images.map((image, imageIndex) => (
                <div key={imageIndex}>
                  <img
                    src={image}
                    alt={`Imagem ${imageIndex + 1}`}
                    className="ImgCarousel"
                  />
                </div>
              ))}
            </Carousel>

            <h3>Vídeos de eventos passados</h3>
            <div className="videos">
              {item.videos.map((video, videoIndex) => (
                <div key={videoIndex} className="video-item">
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="100%"
                    controls
                  />
                  <p>{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
