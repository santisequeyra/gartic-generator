import { useState } from "react";
import logo from "./assets/logo.png";

const animals = [
  "carpincho",
  "pato",
  "tiburón",
  "pulpo",
  "gato",
  "perro",
  "pingüino",
  "dragón",
  "unicornio",
  "dinosaurio",
  "robot",
  "fantasma",
  "pirata",
  "astronauta",
  "mono",
  "elefante",
  "zorro",
  "vaca",
  "gallina",
];

const actions = [
  "tomando mate",
  "haciendo willy",
  "programando",
  "cantando karaoke",
  "cocinando una pizza",
  "sacándose una selfie",
  "tocando la guitarra",
  "haciendo yoga",
  "jugando videojuegos",
  "leyendo un libro",
  "andando en monopatín",
  "haciendo soporte técnico",
  "peleando contra un bug",
  "haciendo un deploy",
  "tomando café",
  "vendiendo helados",
  "escalando una montaña",
  "pintando un cuadro",
];

const places = [
  "en la Luna",
  "en una oficina",
  "en una playa",
  "en un castillo",
  "en el depo",
  "en una nave espacial",
  "en un volcán",
  "en un bosque",
  "en una meet",
  "en una cancha de fútbol",
  "en una piscina",
  "en un laboratorio",
];

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function App() {
  const [phrase, setPhrase] = useState("");

  const generate = () => {
    setPhrase(
      `Un ${random(animals)} ${random(actions)} ${random(places)}.`
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "Inter, sans-serif",
        padding: 24,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 24,
          padding: "48px 40px",
          width: "100%",
          maxWidth: 800,
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,.25)",
        }}
      >
        <img src={logo} alt="Logo" style={{width: 90,height: 90,objectFit: "contain",marginBottom: 12,}}/>
        <h1
          style={{
            marginTop: 12,
            marginBottom: 4,
            color: "#333",
            fontSize: 42,
          }}
        >
          Retro PAD - RAS - IM
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: 18,
            marginBottom: 36,
          }}
        >
          Generador de frases para dibujar con GarticPhone
        </p>

        <button
          onClick={generate}
          style={{
            background: "#5B5CEB",
            color: "white",
            border: "none",
            borderRadius: 14,
            padding: "18px 36px",
            fontSize: 20,
            cursor: "pointer",
            fontWeight: "bold",
            transition: ".2s",
          }}
        >
            🎲 Dame una frase
        </button>

        <div
          style={{
            marginTop: 40,
            minHeight: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {phrase ? (
            <div
              style={{
                background: "#F4F6FF",
                border: "2px dashed #5B5CEB",
                borderRadius: 18,
                padding: "24px",
                fontSize: 30,
                fontWeight: 700,
                color: "#333",
                lineHeight: 1.4,
              }}
            >
              {phrase}
            </div>
          ) : (
            <div
              style={{
                color: "#999",
                fontSize: 24,
              }}
            >
              👆 Presioná el botón para obtener tu frase
            </div>
          )}
        </div>

        <p
          style={{
            marginTop: 40,
            color: "#777",
            fontStyle: "italic",
            fontSize: 15,
          }}
        >
          💡 No le des muchas vueltas jaja. Cuanto peor dibujes,
          mejor va a quedar.
        </p>
      </div>
    </div>
  );
}