import Navbar from "./components/Navbar" ;

import { useState } from "react";

function App() {
  const [commandes, setCommandes] = useState(128);
  const forteAffluence = commandes > 150;
  return (
    <>
      <Navbar />
      <section className="min-h-[80vh] pt-20 flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-red-600 to-orange-500 text-white">

  <h2 className="text-5xl font-bold mb-6">
    Gérez votre restaurant comme un pro
  </h2>

  <p className="text-xl max-w-2xl mb-8">
    Suivez les commandes, gérez les menus et analysez vos performances
    depuis une seule plateforme.
  </p>

  <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
    Découvrir
  </button>

</section>

{/*Cartes de stats*/}

<section className="py-16 px-6">
  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-3xl font-bold text-red-600">{commandes}</h3>
      <p>Commandes aujourd'hui</p>
      <button
  onClick={() => setCommandes(commandes + 1)}
  className="mt-3 bg-red-600 text-white px-4 py-2 rounded"
>
  Nouvelle commande
</button>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-3xl font-bold text-green-600">425 000 FCFA</h3>
      <p>Revenus du jour</p>
    </div>

    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-3xl font-bold text-blue-600">17 min</h3>
      <p>Temps moyen de préparation</p>
    </div>

  </div>
</section>

 {/*tableau*/}

<section className="py-16 px-6 bg-gray-100">
  <h2 className="text-3xl font-bold mb-6">
    Commandes récentes
  </h2>

  <div className="bg-white rounded-xl shadow-lg overflow-hidden">

    <div className="grid grid-cols-4 bg-red-600 text-white p-4 font-bold">
      <p>ID</p>
      <p>Client</p>
      <p>Plat</p>
      <p>Statut</p>
    </div>

    <div className="grid grid-cols-4 p-4 border-b">
      <p>#001</p>
      <p>Mansour</p>
      <p>Burger</p>
      <p className="text-green-600">Livrée</p>
    </div>

    <div className="grid grid-cols-4 p-4 border-b">
      <p>#002</p>
      <p>Amar</p>
      <p>Pizza</p>
      <p className="text-yellow-600">Préparation</p>
    </div>

    <div className="grid grid-cols-4 p-4">
      <p>#003</p>
      <p>Gray</p>
      <p>Poulet</p>
      <p className="text-red-600">En attente</p>
    </div>

  </div>
</section>

{/* Alertes intelligentes */}

<section className="py-16 px-6">
  <h2 className="text-3xl font-bold mb-6">
    Alertes
  </h2>

  <div className="space-y-4">
    {forteAffluence && (
  <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded mb-4">
    🔥 Forte affluence : plus de 150 commandes aujourd'hui !
  </div>
)}

    <div className="bg-red-100 border-l-4 border-red-600 p-4 rounded">
      ⚠️ Commande #003 en attente depuis 20 minutes.
    </div>

    <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
      🍔 Stock de Burgers faible.
    </div>

    <div className="bg-green-100 border-l-4 border-green-600 p-4 rounded">
      ✅ Toutes les livraisons sont à jour.
    </div>

  </div>
</section>
    </>
  );
}
export default App ;