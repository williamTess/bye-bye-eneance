import React from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";

const App = () => {
  console.log(
    "Bon bah c'était pas très dur à trouver.",
    "Salut les gens, j'espère que vous allez bien, en vrai ce fut un véritable plaisir de bosser avec vous tous, j'ai appris plein de chose, c'est juste un peu dommage que ça se finisse comme ça. J'espère que tout va bien se passer pour vous, que vous avez apprécié mon cadeau d'au revoir. J'aimerai vraiment retrouver une équipe comme vous, au plaisir de se revoir !",
    "Petit bonus: il se peut que dans le site un indice soit caché, cela peut être en haut, en bas, en cliquant ou pas. Cela vous fournira un indice sur où fouiller dans Enenace pour trouver mes derniers cadeaux partiques pour ceux travaillant ici.",
    "Gros bonus: www.bit.ly/3MMG4zN"
  );
  return <Home />;
};

export default App;
