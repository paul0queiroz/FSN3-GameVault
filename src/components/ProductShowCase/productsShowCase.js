import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const featuredGames = [
    {
      id: "1",
      title: "The Legend of Zelda: Wind Waker",
      console: "GameCube",
      year: 2003,
      price: 89.9,
      originalPrice: 129.9,
      rating: 4.9,
      image: "/placeholder-zelda.jpg",
      genre: "Aventura",
      isWishlisted: true,
    },
    {
      id: "2",
      title: "Doom 3",
      console: "Xbox Original",
      year: 2005,
      price: 59.9,
      originalPrice: 79.9,
      rating: 4.5,
      image: "/placeholder-doom.jpg",
      genre: "FPS",
    },
    {
      id: "3",
      title: "Tomb Raider: Legend",
      console: "PlayStation 2",
      year: 2006,
      price: 49.9,
      rating: 4.3,
      image: "/placeholder-tomb.jpg",
      genre: "Ação",
    },
    {
      id: "4",
      title: "Pokémon Diamond",
      console: "Nintendo DS",
      year: 2007,
      price: 159.9,
      originalPrice: 199.9,
      rating: 4.8,
      image: "/placeholder-pokemon.jpg",
      genre: "RPG",
      isWishlisted: true,
    },
    {
      id: "5",
      title: "Grand Theft Auto: Vice City",
      console: "PlayStation 2",
      year: 2002,
      price: 39.9,
      rating: 4.7,
      image: "/placeholder-gta.jpg",
      genre: "Ação",
    },
    {
      id: "6",
      title: "Super Mario 64 DS",
      console: "Nintendo DS",
      year: 2004,
      price: 129.9,
      rating: 4.6,
      image: "/placeholder-mario.jpg",
      genre: "Plataforma",
    },
    {
      id: "7",
      title: "Halo 2",
      console: "Xbox Original",
      year: 2004,
      price: 69.9,
      originalPrice: 99.9,
      rating: 4.8,
      image: "/placeholder-halo.jpg",
      genre: "FPS",
    },
    {
      id: "8",
      title: "Final Fantasy X",
      console: "PlayStation 2",
      year: 2001,
      price: 79.9,
      rating: 4.9,
      image: "/placeholder-ff.jpg",
      genre: "RPG",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-glow">Clássicos</span> em Destaque
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Reviva os melhores momentos da história dos videogames com nossa
            seleção especial de títulos icônicos dos anos 2000
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Todos", "Aventura", "FPS", "RPG", "Ação", "Plataforma"].map(
            (filter) => (
              <button
                key={filter}
                className="px-4 py-2 bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-purple-500/50 text-gray-300 hover:text-white border border-gray-600 hover:border-blue-400 rounded-full text-sm transition-all duration-300"
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <ProductCard key={game.id} {...game} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover-glow">
            Carregar Mais Jogos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
