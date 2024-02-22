import { useState } from "react";
import ProductItem from "./ProductItem";
import Nav from "./Nav";
import Footer from "./Footer";

const Product = () => {
    const [Products , setproducts ] = useState(
        [
            {title : 'PACK CHOC "TREATMENT + MASK + SERUM + SHAMPOING"'  , price : 8400.00  , imgUrl:'./dataIMG/1.webp' } , 
            {title : '"PACK 7J : MASK + SERUM + SHAMPOING"'  , price : 4500.00 , imgUrl:'./dataIMG/2.webp' } , 
            {title : 'PACK CAVIAR "HAIR-MASK + SERUM" de BIOPLEX'  , price : 3000.00 , imgUrl:'./dataIMG/3.webp' } , 
            {title : 'Bioplex 1 Shampoing Clarifiant 1000ml'  , price : 1600.00 , imgUrl:'./dataIMG/4.webp' } , 
            {title : 'Bioplex Traitement Protein 2 - Kératine & Collagène 1000ML'  , price :4500 , imgUrl:'./dataIMG/5.webp' } , 
            {title : 'Bioplex Conditioner Protien (3) for Keratin & Collagen 1000ML'  , price : 1600.00 , imgUrl:'./dataIMG/6.webp' } , 
            {title : 'Bioplex Shampoo Protein For Keratin & Collagen 1000ML'  , price : 1600.00 , imgUrl:'./dataIMG/7.webp' } , 
            {title : 'Bioplex Violet Treatment Protein 1000ML Anti-Yellow Blond & Brightness with Crystal & Collagen'  , price : 6800.00 , imgUrl:'./dataIMG/8.webp' } , 
            {title : 'Bioplex Proteine Kit Bioplex 3 × 1000 Ml'  , price : 7800.00 , imgUrl:'./dataIMG/9.webp' } , 
            {title : 'Bioplex Proteine Kit Bioplex 3 × 500 Ml'  , price : 3900.00 , imgUrl:'./dataIMG/10.webp' } , 
            {title : 'Bioplex Mini Kit Traitement Protéines Pour Cheveux 100 Ml X 3'  , price : 2400.00 , imgUrl:'./dataIMG/11.webp' } , 
            {title : 'Treatment Bioplex 24k Gold therapy 1000ml'  , price : 5500.00 , imgUrl:'./dataIMG/12.webp' } , 
            {title : 'Bioplex BOTOX PROKERATIN PROTEIN TREATMENT'  , price : 6800.00 , imgUrl:'./dataIMG/13.webp' } , 
            {title : 'Bioplex 24k Gold therapy kit 1000ml x3 (shampoo+treatment+conditioner)'  , price : 9900.00 , imgUrl:'./dataIMG/14.webp' } , 
            {title : 'Bioplex 24k Gold therapy kit 400ml x3 (shampoo+treatment+conditioner)'  , price : 5500.00 , imgUrl:'./dataIMG/15.webp' } , 
            {title : 'Bioplex Gold 24K Gold Therapy hair Mask 500ML'  , price : 2900.00 , imgUrl:'./dataIMG/16.webp' } , 
            {title : 'Bioplex shampoo Sans Sulfate Omega 3 500ML'  , price : 1200.00 , imgUrl:'./dataIMG/17.webp' } , 
            {title : 'Bioplex Special CAVIAR Hair Mask 500ml'  , price : 1700.00 , imgUrl:'./dataIMG/18.webp' } , 
            {title : 'Bioplex Mask Sans sulfate Omega 3 500ML'  , price : 1700.00 , imgUrl:'./dataIMG/19.webp' } , 
            {title : 'Bioplex masque protéine 500ml'  , price : 1400.00 , imgUrl:'./dataIMG/20.webp' } , 
            {title : 'Bioplex Masque pour Cheveux Protein & Keratin & Collagen 500ml'  , price : 1400.00 , imgUrl:'./dataIMG/21.webp' } , 
            {title : 'Bioplex Protein Serum Sans Sulfate 100ML'  , price : 1400.00 , imgUrl:'./dataIMG/22.webp' } , 
            {title : 'Biplex Special Caviar Hair Serum 100ml'  , price : 1800.00 , imgUrl:'./dataIMG/23.webp' } , 
            {title : 'Bioplex Kit traitement Caviar 100ml'  , price : 2900.00 , imgUrl:'./dataIMG/24.webp' } , 
            {title : 'Bioplex Traitement aux Protéines Capillaires - Pour Cheveux Abîmés 100G'  , price : 1200.00 , imgUrl:'./dataIMG/25.webp' } , 
            {title : 'BEAUTYPLEX باقة متكاملة للعناية بالشعر من'  , price : 8000.00 , imgUrl:'./dataIMG/26.webp' } , 
    ]
     ) ;
  return (
    <div>
      <Nav></Nav>
      <br></br>
          <br></br>
          <br></br>
          <br></br><br></br>
          
          
      <div className="Product">
        <h1>Notre Produits</h1>
        <div className="product">
          {Products.map((productItem) => (
            <>
              <ProductItem productItem={productItem} />
            </>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Product;



