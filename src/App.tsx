import Header from './sections/Header';
import Principal from './sections/Principal';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { subsectionsConstants } from './constants/subsectionsConstants';
import TextMedia from './components/TextMedia';
import Bullets from './sections/Bullets';
import Certificates from './components/Certificates';

function MainContent() {
  return (
    <>
      <Header />
      <Principal />
      <TextMedia {...subsectionsConstants().justica} />
      <Bullets {...subsectionsConstants().indecisao} />
      <TextMedia {...subsectionsConstants().resolve} />
      <TextMedia {...subsectionsConstants().precisao} />
      <TextMedia {...subsectionsConstants().diagnosticos} />
      <Bullets {...subsectionsConstants().consulta} />
      <TextMedia {...subsectionsConstants().custo} />
      <TextMedia {...subsectionsConstants().futuro} />
      <Certificates />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <MainContent />
  );
}

export default App;
