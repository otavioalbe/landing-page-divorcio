import { useState } from "react";
import { subsectionsConstants } from "../constants/subsectionsConstants";
import { useBreakpoints } from "../hooks/useBreakpoints";
import Container from "./Container";

export default function Certificates() {

 const { isDesktop } = useBreakpoints();
 const { certificates } = subsectionsConstants();
 const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full bg-secondary">
      {isDesktop && (
        <Container>
          <div className="flex flex-row  gap-4 w-full justify-center">
            {certificates.map((certificate) => (
              <img 
                key={certificate.id}
                src={certificate.image} 
                alt="certificado" 
                className="w-full max-w-[300px] h-auto object-contain cursor-pointer shadow-2xl hover:opacity-70 hover:scale-105 transition-all duration-300" 
                onClick={() => setSelectedImage(certificate.image)}
              />
            ))}
          </div>
        </Container>
      )}
      {!isDesktop && (
        <Container>
            <div 
            className="flex gap-4 px-4 overflow-x-auto pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
            >
            {certificates.map((certificate) => (
                <img 
                key={certificate.id}
                src={certificate.image} 
                alt="certificado" 
                className="w-[280px] h-auto object-contain flex-shrink-0 cursor-pointer hover:opacity-70 hover:scale-105 transition-all duration-300"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => setSelectedImage(certificate.image)}
                />
            ))}
            </div>
        </Container>
      )}

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-10 !text-white cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            X
          </button>
          <img 
            src={selectedImage} 
            alt="certificado" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}