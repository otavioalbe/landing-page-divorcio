import Container from '../components/Container';
import { mainSectionConstants } from '../constants/mainSectionConstants';

export default function Principal() {

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
            <img src="./assets/images/laura.jpg" alt="imagem" />
          </div>
        </div>
        <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" className="!my-10 !body-large button-primary">{content.button}</a>
      </Container>
    </div>
  );
}