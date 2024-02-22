import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./Nav"; 
import Footer from "./Footer";

const cities = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara", "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"
];

const Forme = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNumber] = useState("");
  const [baladiya, setBaladiya] = useState("");
  const [city, setCity] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    const storedProductInfo = localStorage.getItem("productInfo");
    if (storedProductInfo) {
      const productInfo = JSON.parse(storedProductInfo);
      setProductTitle(productInfo.title);
      setProductPrice(productInfo.price);
      setImgUrl(productInfo.imgUrl);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const formData = {
        user_info: {
          name,
          email,
          phoneNum,
          baladiya,
          city,
        },
        product_info: {
          title: productTitle,
          price: productPrice,
          imgUrl: imgUrl,
        },
      };
      const response = await axios.post(
        "http://127.0.0.1:8000/submit-form/",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      localStorage.removeItem("productInfo");
      toast.success("E-mail envoyé avec succès");
      setBaladiya("");
      setCity("");
      setEmail("");
      setPhoneNumber("");
      setName("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Envoi échoué");
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <>
      <Nav />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="Form">
        <div className="ProductItem">
          <div className="img">
            <img id="ProductImg" src={imgUrl} alt="bioplex" />
          </div>
          <div className="desc">
            <h1>{productTitle}</h1>
            <p>Prix habituel : {productPrice} DZD</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="nom et prénom"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="tel"
              id="phoneNum"
              value={phoneNum}
              placeholder="numéro de téléphone"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="baladiya"
              value={baladiya}
              placeholder="commune"
              onChange={(e) => setBaladiya(e.target.value)}
              required
            />
          </div>
          <div>
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="">Sélectionner la ville</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Forme;
