import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { IoCartOutline } from "react-icons/io5";

import { getImgUrl } from "../../utils/getImgUrl";
import { addToCart } from "../../redux/features/cart/cartSlice";

export default function BookCard({ book }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="rounded-lg transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
          <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
            <Link to={`/books/${book._id}`}>
              <img
                src={`${getImgUrl(book.coverImage)}`}
                alt=""
                className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>

          <div className="flex flex-col items-stretch">
            <Link to={`/books/${book._id}`}>
              <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">{book.title}</h3>
            </Link>
            <p className="text-gray-600 mb-5">
              {book.description.length > 80
                ? `${book.description.slice(0, 80)}...`
                : book.description}
            </p>
            <p className="font-medium mb-5">
              {book.newPrice} <span className="line-through font-normal ml-2">{book.oldPrice}</span>
            </p>
            <button onClick={() => handleAddToCart(book)} className="btn btn-primary">
              <IoCartOutline size={24} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
