
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={category.path}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#163a63]"
    >
      <div className="flex h-40 items-center justify-center overflow-hidden bg-[#f8f9fb] p-5 sm:h-52 sm:p-7">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex min-h-[66px] items-center justify-center border-t border-gray-100 px-3 py-4 text-center">
        <h3 className="text-sm font-semibold text-gray-800 transition-colors duration-200 group-hover:text-[#163a63] sm:text-base">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}
