import React from "react";

const TopCategoriesTable = () => {
  const categories = [
    { id: 1, name: "Echipamente Sportive", description: "Biciclete, corturi, echipament fitness", popularity: "★★★★★" },
    { id: 2, name: "Unelte și Scule", description: "Bormașini, generatoare, scări", popularity: "★★★★☆" },
    { id: 3, name: "Gadget-uri", description: "Dronă, camere foto, laptopuri", popularity: "★★★★☆" },
    { id: 4, name: "Echipamente pentru Evenimente", description: "Boxe, lumini, mese și scaune", popularity: "★★★★☆" },
    { id: 5, name: "Vehicule", description: "Mașini, scutere, biciclete electrice", popularity: "★★★☆☆" },
  ];

  return (
    <section className="flex items-center justify-center py-16 bg-gray-light dark:bg-bg-color-dark">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white text-center">
          Cele mai închiriate categorii de produse
        </h2>
        <table className="min-w-full bg-white dark:bg-gray-dark border border-gray-200 rounded-md shadow-md overflow-hidden">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-6 text-left text-gray-700 dark:text-white text-sm font-medium uppercase">
                #
              </th>
              <th className="py-3 px-6 text-left text-gray-700 dark:text-white text-sm font-medium uppercase">
                Categoria
              </th>
              <th className="py-3 px-6 text-left text-gray-700 dark:text-white text-sm font-medium uppercase">
                Descriere
              </th>
              <th className="py-3 px-6 text-left text-gray-700 dark:text-white text-sm font-medium uppercase">
                Popularitate
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr
                key={category.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600`}
              >
                <td className="py-3 px-6 text-gray-700 dark:text-white">{category.id}</td>
                <td className="py-3 px-6 text-gray-900 dark:text-gray-300 font-medium">
                  {category.name}
                </td>
                <td className="py-3 px-6 text-gray-700 dark:text-gray-400">{category.description}</td>
                <td className="py-3 px-6 text-yellow-500">{category.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopCategoriesTable;
