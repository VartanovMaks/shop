import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../app/Slices/ProductSlice";

function ProductItem({ product }) {
  const [deleteProduct] = useDeleteProductMutation();
  const { refetch } = useGetProductsQuery();

  const handleDelete = async (id) => {
    if (id) {
      try {
        await deleteProduct(id).unwrap();
        console.log("refetching after delete");
        refetch();
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const [productId, setProductId] = useState(product?.id);
  return (
    <div className="product-card">
      <h3>{product.category}</h3>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <Link to={`${productId}`}> To Details</Link>
      <button onClick={() => handleDelete(product.id)}> Delete product</button>
    </div>
  );
}

export default ProductItem;
