import Gallery from "../../components/Gallery.jsx";
import { pantalones, remeras, zapatos } from "../../constants/clothes.js";

const Home = () => {

  const galleryPhotos = [
      ...remeras,
      ...pantalones,
      ...zapatos
  ]

  return (
    <div>
      <h1>Ecommerce</h1>
      <Gallery photos={galleryPhotos} />
    </div>
  );
}

export default Home;
