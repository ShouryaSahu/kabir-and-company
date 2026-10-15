
import { Link, useParams } from "react-router-dom";
import { categories } from "../data";
import Footer from "../components/Footer";

export default function CategoryPage() {
  const { categoryId } = useParams();

  const category = categories.find(
    (item) => item.id === categoryId
  );

  if (!category) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Category not found
        </h1>
        <Link
          to="/"
          className="mt-4 inline-block text-blue-700 hover:underline"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <>
      <main className="mx-auto min-h-[60vh] max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/#products" className="hover:text-blue-700">
            Our Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{category.name}</span>
        </nav>

        {/* Page heading */}
        <div className="mb-8 border-b border-gray-200 pb-5">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {category.name}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Explore our available products.
          </p>
        </div>

        {/* Product grid */}
        {category.products && category.products.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Product photo */}
                <div className="flex h-48 items-center justify-center bg-white p-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </div>

                {/* Product name */}
                <div className="flex min-h-[65px] items-center justify-center border-t border-gray-100 px-4 py-4 text-center">
                  <h2 className="font-semibold text-gray-800">
                    {product.name}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-xl bg-gray-50 px-5 py-10 text-center text-gray-500">
            Products will be added soon.
          </p>
        )}
      </main>

      <Footer />
    </>
  );
}
