function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-red-600/90 backdrop-blur-md text-white z-50">

      <h1 className="text-2xl font-bold">FoodManager</h1>

      <ul className="flex gap-6">
        <li className="hover:text-yellow-300 cursor-pointer">Accueil</li>
        <li className="hover:text-yellow-300 cursor-pointer">Fonctionnalités</li>
        <li className="hover:text-yellow-300 cursor-pointer">Statistiques</li>
        <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
      </ul>

      <button className="bg-white text-red-600 px-4 py-2 rounded-lg hover:scale-105 transition">
        Connexion
      </button>

    </nav>
  );
}

export default Navbar;