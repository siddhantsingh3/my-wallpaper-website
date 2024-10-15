import React from 'react';
import './index.css'; // Import your custom CSS file for styling

const Wallpapers = () => {
  // Sample data for wallpapers (replace with actual image URLs or import local images)
  const wallpapers = [

    { id: 1, src: 'https://drive.google.com/file/d/10KZkiuH0m0BEdDg1gPBKOFf3jlBkcH9q/preview', alt: 'Wallpaper 1' },
    { id: 2, src: 'https://drive.google.com/file/d/1s2aciiPeK2FkD0Nnr8UmsT6GaC1YERsn/preview', alt: 'Wallpaper 2' },
    { id: 3, src: 'https://drive.google.com/file/d/1lSMIoiyKcbmOUAOqNh3AfDUu1SdTQBXh/preview', alt: 'Wallpaper 3' },
    { id: 4, src: 'https://drive.google.com/file/d/1Z56y2onOCo2jqEUDTTITcW5VqlYIKPV3/preview', alt: 'Wallpaper 4' },
    { id: 5, src: 'https://drive.google.com/file/d/1N3f2TBvIGVt4pl_0yUXzj6tmidYNuypT/preview', alt: 'Wallpaper 5' },
    { id: 6, src: 'https://drive.google.com/file/d/1tIgVRf50CYSsRXoouzFkqVdrun1LqiZq/preview', alt: 'Wallpaper 6' },
  //   { id: 7, src: './img/Black Yellow Aesthetic Samurai Desktop Wallpaper.png', alt: 'Wallpaper 7' },
  //   { id: 8, src: './img/1.png', alt: 'Wallpaper 8' },
  //   { id: 9, src: './img/1356688.jpeg', alt: 'Wallpaper 9' },
  //   { id: 10, src: './img/Business Event Website.png', alt: 'Wallpaper 10' },
  //   { id: 11, src: './img/1356866.png', alt: 'Wallpaper 11' },
  //   { id: 12, src: './img/BIGGER.png', alt: 'Wallpaper 12' },
  //   { id: 13, src: './img/Black Yellow Aesthetic Samurai Desktop Wallpaper.png', alt: 'Wallpaper 13' },
  //   { id: 14, src: './img/1.png', alt: 'Wallpaper 14' },
  //   { id: 15, src: './img/1356688.jpeg', alt: 'Wallpaper 15' },
  //   { id: 16, src: './img/Business Event Website.png', alt: 'Wallpaper 16' },
  //   { id: 17, src: './img/1356866.png', alt: 'Wallpaper 17' },
  //   { id: 18, src: './img/BIGGER.png', alt: 'Wallpaper 18' },
  //   { id: 19, src: './img/Black Yellow Aesthetic Samurai Desktop Wallpaper.png', alt: 'Wallpaper 19' },
  //   { id: 20, src: './img/1.png', alt: 'Wallpaper 20' },
  //   { id: 21, src: './img/1356688.jpeg', alt: 'Wallpaper 21' },
  //   { id: 22, src: './img/Business Event Website.png', alt: 'Wallpaper 22' },
  //   { id: 23, src: './img/1356866.png', alt: 'Wallpaper 23' },
  //   { id: 24, src: './img/BIGGER.png', alt: 'Wallpaper 24' },
   ];

  return (
    <div className="wallpaper-container">
      <header>
        <h3>sid.exo</h3>
        <h1>MY Own Wallpapers</h1>
        <p>
          Your next favorite desktop wallpaper is here. Explore our curated
          collection with diverse designs, available in every size and color—all
          free to elevate your screen. Step into a new dimension.
        </p>
      </header>

      <div className="wallpaper-grid">
        {wallpapers.map((wallpaper) => (
          <div key={wallpaper.id} className="wallpaper-item">
            <div className='imgg'>
            <iframe src={wallpaper.src} alt={wallpaper.alt}  width="640" height="480"  ></iframe>
            {/* <img src={wallpaper.src} alt={wallpaper.alt} /> */}
            </div>
            <a
              href={wallpaper.src}
              target="_blank"
              rel="noopener noreferrer"
              className="download-button"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallpapers;
