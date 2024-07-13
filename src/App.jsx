import { useState } from "react";
import NavBar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";

function App() {
  const products = [
    {
      name: "Titan Black and GB",
      image:
        "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw9b32981c/images/Titan/Catalog/1805NM05_1.jpg?sw=800&sh=800",

      price: "$32.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$40.00",
    },
    {
      name: "Apple Watch IStock",

      image:
         "https://media.istockphoto.com/id/496730484/photo/apple-watch-sport-42mm-silver-aluminum-case-with-white-band.jpg?s=612x612&w=0&k=20&c=RY2MGp4S-OVqAZm1ZCUDhM6KSmfAJ02RU51l4mJa2EA=",
      price: "$64.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$80.00",
    },
    {
      name: "Noise ColorFit pro 4",
      image:
        "https://m.media-amazon.com/images/I/41KFr6GknZL._SX300_SY300_QL70_FMwebp_.jpg",
      price: "$120.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$150.00",
    },
    {
      name: "Fire Boltt Dream",
      image:
        "https://images.snapmint.com/product_assets/images/000/930/182/large/open-uri20240110-13690-hkf5u4?1704889882",
      price: "$40.00",
      rating: true,
      sale: false,
      original: false,
      originalPrice: "",
    },
    {
      name: "Casio G-Shock",
      image:
        "https://m.media-amazon.com/images/I/61OdD9j53AL._SX679_.jpg",
      price: "$160.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$200.00",
    },
    {
      name: "Casio F91W",
      image:
        "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/F/F9/F91/f-91w-3/assets/F-91W-3.png.transform/main-visual-pc/image.png",
      price: "$120.00",
      rating: true,
      sale: false,
      original: false,
    },
    {
      name: "boat Wave",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTECrskLQT2gOfTPWe4I1ZgQsZx8BunEcfbnIvrJvmsQx3RazKG4pDZJyYUHBGCaqHzw0Qm-W_mcuRCCIOxamZsfGV-HwN3",
      price: "$200.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$250.00",
    },
    {
      name: "Fastrack",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRkDMdF6jBUvVKfNGiT-1UacGuHRtGmbkDswxlAVPNa76MRW7K_ol0boOZCo03haHRNyfNY6hv6ROsCYwjDzA07kPhOMsBMRxzR9X8ylQIgjklF8htLHeWY",
      price: "$80.00",
      rating: true,
      sale: false,
      original: false,
      originalPrice: "",
    },
  ];

  // state for cart
  const [cartNo, setCartNo] = useState(0);

  return (
    <>
      <NavBar cartNo={cartNo} />
      <Header />
      <Products products={products} setCartNo={setCartNo} />
      <Footer />
    </>
  );
}

export default App;