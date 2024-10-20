
const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}


      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Welcome to Our Store!</h2>
          <p className="mt-4 text-lg">Discover amazing products at unbeatable prices.</p>
          <a href="#" className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded-full font-semibold">Shop Now</a>
        </div>
      </section>

      {/* Product Section */}
      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 1, title: 'Product 1', price: '$19.99', img: 'https://via.placeholder.com/150' },
            { id: 2, title: 'Product 2', price: '$29.99', img: 'https://via.placeholder.com/150' },
            { id: 3, title: 'Product 3', price: '$39.99', img: 'https://via.placeholder.com/150' }
          ].map(product => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={product.img} alt={product.title} className="mb-4 w-full h-40 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="mt-2 text-gray-600">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 ShopNow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
