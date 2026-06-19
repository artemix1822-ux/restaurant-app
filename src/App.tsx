import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [commandes, setCommandes] = useState(128);
  const forteAffluence = commandes > 150;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-[85vh] pt-24 flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-red-700 via-red-600 to-orange-500 text-white">
        <span className="text-sm uppercase tracking-widest bg-white/20 px-4 py-1 rounded-full mb-6 font-medium">
          Tableau de bord restaurant
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight max-w-3xl">
          Gérez votre restaurant <br />
          <span className="text-orange-200">comme un pro</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-10 text-white/80">
          Suivez les commandes, gérez les menus et analysez vos performances
          depuis une seule plateforme intuitive.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-red-600 px-7 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg">
            Découvrir
          </button>
          <button className="border border-white/60 text-white px-7 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
            En savoir plus
          </button>
        </div>
      </section>

      {/* Cartes de stats */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-700 mb-8">
          Vue d'ensemble du jour
        </h2>
        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Commandes aujourd'hui</p>
            <h3 className="text-4xl font-extrabold text-red-600 mb-4">{commandes}</h3>
            <button
              onClick={() => setCommandes(commandes + 1)}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              + Nouvelle commande
            </button>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Revenus du jour</p>
            <h3 className="text-4xl font-extrabold text-green-600 mb-1">425 000</h3>
            <p className="text-gray-400 text-sm">FCFA</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Temps moyen de préparation</p>
            <h3 className="text-4xl font-extrabold text-blue-600 mb-1">17 min</h3>
            <p className="text-gray-400 text-sm">par commande</p>
          </div>

        </div>
      </section>

      {/* Tableau commandes */}
      <section className="py-16 px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-700">Commandes récentes</h2>
          <button className="text-sm text-red-600 hover:underline font-medium">
            Voir tout →
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          <div className="grid grid-cols-4 bg-red-600 text-white px-6 py-4 text-sm font-semibold uppercase tracking-wide">
            <p>ID</p>
            <p>Client</p>
            <p>Plat</p>
            <p>Statut</p>
          </div>

          {[
            { id: "#001", client: "Mansour", plat: "Burger", statut: "Livrée", color: "text-green-600", bg: "bg-green-50" },
            { id: "#002", client: "Amar", plat: "Pizza", statut: "En préparation", color: "text-yellow-600", bg: "bg-yellow-50" },
            { id: "#003", client: "Gray", plat: "Poulet", statut: "En attente", color: "text-red-600", bg: "bg-red-50" },
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 px-6 py-4 border-b last:border-none hover:bg-gray-50 transition text-sm"
            >
              <p className="font-mono font-semibold text-gray-500">{row.id}</p>
              <p className="font-medium text-gray-700">{row.client}</p>
              <p className="text-gray-600">{row.plat}</p>
              <span className={`${row.color} ${row.bg} text-xs font-semibold px-2 py-1 rounded-full w-fit`}>
                {row.statut}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Alertes */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-700 mb-8">Alertes intelligentes</h2>

        <div className="space-y-4 max-w-3xl">
          {forteAffluence && (
            <div className="flex items-start gap-3 bg-orange-50 border-l-4 border-orange-500 p-4 rounded-xl shadow-sm">
              <span className="text-xl">🔥</span>
              <div>
                <p className="font-semibold text-orange-700">Forte affluence</p>
                <p className="text-sm text-orange-600">Plus de 150 commandes enregistrées aujourd'hui.</p>
              </div>
            </div>
          )}

          <div className="flex items-start gap-3 bg-red-50 border-l-4 border-red-500 p-4 rounded-xl shadow-sm">
            <span className="text-xl">⚠️</span>
            <div>
              <p className="font-semibold text-red-700">Commande en attente</p>
              <p className="text-sm text-red-600">La commande #003 est en attente depuis plus de 20 minutes.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-xl shadow-sm">
            <span className="text-xl">🍔</span>
            <div>
              <p className="font-semibold text-yellow-700">Stock faible</p>
              <p className="text-sm text-yellow-600">Le stock de Burgers est presque épuisé. Pensez à réapprovisionner.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-green-50 border-l-4 border-green-500 p-4 rounded-xl shadow-sm">
            <span className="text-xl">✅</span>
            <div>
              <p className="font-semibold text-green-700">Livraisons à jour</p>
              <p className="text-sm text-green-600">Toutes les livraisons du jour ont été effectuées avec succès.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-400 border-t">
        © 2025 Restaurant App — Tous droits réservés
      </footer>
    </>
  );
}

export default App;