import { useState } from "react";
import type { TextMediaProps } from "../types/TextMidiaProps";
import Container from "./Container";
import Certificates from "./Certificates";

export default function TextMedia({ title, paragraph, button, image, videoUrl }: TextMediaProps) {

  const [videoLoaded, setVideoLoaded] = useState(false);
  const phoneNumber = '5554991184768';
  const message = encodeURIComponent(
    'Olá! Gostaria de consultar sobre divórcio. Poderia me ajudar?'
  );

  const isPrecisao = title?.toLowerCase().includes('estou aqui para te orientar com precisão.');

  const handleVideoOrImage = () => {
    if (!image && !videoUrl) {
      return null;
    }
    if (videoUrl) {
      return (
        <div className="relative w-[338px] h-[600px]">
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg" />
          )}
          <iframe 
            src={videoUrl} 
            title="video" 
            className={`w-full h-full object-cover ${!videoLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            onLoad={() => setVideoLoaded(true)}
          />
        </div>
      );
    }
    return <img src={image} alt="imagem" className="w-full h-full object-cover" />;
  };

  return (
    <div
    id="about"
    className="w-full bg-secondary !pb-20"
  >
    <Container>
        <div className="flex flex-col !pt-10">
          <div className="flex flex-col w-full !pb-10">
            <h1 className="apple-garamond header-2 !text-primary whitespace-pre-line">{title}</h1>
            <p className="body-large !mt-4 whitespace-pre-line">{paragraph}</p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {isPrecisao ? <Certificates /> : handleVideoOrImage()}
          </div>
        </div>
        {button && <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" className="!mt-10 !body-large button-primary hover:scale-105 hover:opacity-90 transition-all duration-300">{button}</a>}
    </Container>
    </div>
  );
}