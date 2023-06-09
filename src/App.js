import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactPlayer from 'react-player';

function App() {
  const portfolioItems = [
    {
      title: '9o Edição',
      description: '14 de maio de 2016',
      images: ['./images/2016/reggaenapraca2016.jpg', './images/2016/reggaenapraca2016_2.jpg', './images/2016/reggaenapraca2016_3.jpg', './images/2016/reggaenapraca2016_4.jpg', './images/2016/reggaenapraca2016_5.jpg'],
      videos: [
        { url: 'https://www.youtube.com/watch?v=ZoK7KoYLbC0', title: 'Calango Rasta' },
        { url: 'https://www.youtube.com/watch?v=uvPAJJVE-Vo', title: 'Jah Connection' }
      ]
    },
    ///SUBIR PRO GITHUB!!!!
    {
      title: '8o Edição',
      description: '20 de março de 2016',
      images: ['./images/2016_2/reggaenapraca8_0.jpg', './images/2016_2/reggaenapraca8_01.jpg', './images/2016_2/reggaenapraca8_02.jpg', './images/2016_2/reggaenapraca8_03.jpg', './images/2016_2/reggaenapraca8_04.jpg'],
      videos: [
        { url: 'https://www.youtube.com/watch?v=ZoK7KoYLbC0', title: 'Calango Rasta' },
        { url: 'https://www.youtube.com/watch?v=uvPAJJVE-Vo', title: 'Jah Connection' }
      ]
    }
    // Adicione mais itens de portfólio aqui
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
                  <img src={image} alt={`Imagem ${imageIndex + 1}`} className='ImgCarousel'/>
                </div>
              ))}
            </Carousel>

            <h3>Vídeos de eventos passados</h3>
            <div className="videos">
              {item.videos.map((video, videoIndex) => (
                <div key={videoIndex} className="video-item">
                  <ReactPlayer url={video.url} width="100%" height="100%" controls />
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
