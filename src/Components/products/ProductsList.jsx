import "./Products.css";
import { useGetProductsQuery } from "../../app/Slices/ProductSlice";
import ProductItem from "./ProductItem";
import { Outlet } from "react-router-dom";

function ProductsList() {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  let content;

  if (isLoading) {
    content = <h2> Loading...</h2>;
  } else if (isSuccess) {
    content = products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div className="container">
      <div className="products-body">
        <div style={{ width: "50%" }}>{content}</div>
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default ProductsList;
