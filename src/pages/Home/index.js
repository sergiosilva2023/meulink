import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

import api from "../../services/api";
import { saveLink } from '../../services/storeLinks'

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link
      });

      setData(response.data);
      setShowModal(true);
      saveLink('@encurtaLink', response.data);
      
      setLink('');

    } catch {
      alert("Ops algo não deu certo!");
      setLink("");
    }
  }

  return (
    <div className="container-home">
      <div className="Logo">
        <img src="/logo.png" alt="Sujeito link logo" />
        <h1>Sujeito-Link</h1>
        <span>Cole seu link preferido 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            placeholder="Cole o seu link aqui!"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>

      <Menu />

      {showModal &&
      <LinkItem 
      closeModal={() => setShowModal(false)}
      content={data}
      />}
    </div>
  );
}
