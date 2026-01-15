import { useState } from 'react';
import Container from '../components/Container';
import { mainSectionConstants } from '../constants/mainSectionConstants';

export default function Principal() {

  const [videoLoaded, setVideoLoaded] = useState(false);
  const content = mainSectionConstants();
  const phoneNumber = '5554991184768';
  const message = encodeURIComponent(
    'Olá! Gostaria de consultar sobre divórcio. Poderia me ajudar?'
  );

  return (
    <div
      className="w-full bg-secondary"
    >
      <Container>
        <div className="flex flex-col !pt-10">
          <div className="flex flex-col w-full !pb-10">
            <h1 className="apple-garamond header-1 !text-primary text-center whitespace-pre-line !pb-4">{content.title}</h1>
            <p className="body-large !mt-4 whitespace-pre-line">{content.paragraph}</p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[338px] h-[600px]">
              {!videoLoaded && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
              )}
              <iframe 
                src={content.videoUrl} 
                title="video" 
                className={`w-full h-full object-cover ${!videoLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                onLoad={() => setVideoLoaded(true)}
              />
            </div>
          </div>
        </div>
        <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" className="!my-10 !body-large button-primary hover:scale-105 hover:opacity-90 transition-all duration-300">{content.button}</a>
      </Container>
    </div>
  );
}