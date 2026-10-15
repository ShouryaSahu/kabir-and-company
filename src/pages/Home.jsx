import ReporterSection from "../components/ReporterSection";
import { categories } from "../data";
import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        {/* Minimal hero section */}
        <section className="animate-fade-up px-5 pb-12 pt-16 text-center sm:pb-16 sm:pt-24">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#163a63]">
            WELCOME TO KABIR AND COMPANY
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl">
            Everyday essentials.
            <span className="mt-1 block text-gray-500">
              For your business.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            FMCG products and wholesale distribution, serving retailers
            and business customers.
          </p>
        </section>

        {/* Product categories */}
        <section
          id="products"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-16"
        >
          <div className="animate-fade-up-delay mb-6 flex items-end justify-between border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Our Products
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Explore our product categories
              </p>
            </div>

            <span className="pb-1 text-xs text-gray-500 sm:text-sm">
              {categories.length} categories
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </section>
      </main>
            <ReporterSection />
      <Footer />
    </>
  );
}
