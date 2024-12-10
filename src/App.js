import Header from "./components/Header";
import Gallery from './components/Gallery';
import Footer from "./components/Footer";
import Link from "./components/BackToTop";

function App() {
  return (
    <div className="
      m-auto
      max-w-[1920px]
    ">
      <Header/>
      <Gallery />
      <Link/>
      <Footer/>
    </div>
  );
}

export default App;
