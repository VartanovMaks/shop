import { useParams, useNavigate } from "react-router-dom";
import { useGetProductByIdQuery } from "../../app/Slices/ProductSlice";

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductByIdQuery(productId);

  let content;

  if (isLoading) {
    content = <h2> Loading...</h2>;
  } else if (isSuccess) {
    content = (
      <div
        className="product-card"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>{product.category}</h3>
        <p>{product.title}</p>
        <img
          src={product.image}
          alt="product"
          style={{ maxWidth: "400px", maxHeight: "400px" }}
        ></img>
        <p>{product.price}</p>
        <p>{product.description}</p>

        <button onClick={() => navigate("/products")}> Back to list</button>
      </div>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }
  return <div>{content}</div>;
}

export default ProductDetails;
