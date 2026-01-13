import './App.css';
// Dosyaların "components" klasöründe olduğu için yolunu ./components/... diye belirtiyoruz
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;