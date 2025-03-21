import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { IoCartOutline } from "react-icons/io5";
import { getImgUrl } from "../../utils/getImgUrl";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useFetchBookByIdQuery } from "../../redux/features/book/bookApi";

export default function SingleBook() {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error happended while loading book info...</p>;

  return (
    <div className="max-w-lg shadow-md p-5 mb-10">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

      <div className="">
        <div>
          <img src={`${getImgUrl(book.coverImage)}`} alt={book.title} className="mb-8" />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Author:</strong> {book.author || "admin"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4 capitalize">
            <strong>Category:</strong> {book?.category}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {book.description}
          </p>
        </div>

        <button onClick={() => handleAddToCart(book)} className="btn btn-primary">
          <IoCartOutline size={24} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
