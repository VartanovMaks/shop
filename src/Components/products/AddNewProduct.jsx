import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import {
  useAddProductMutation,
  useGetProductsQuery,
} from "../../app/Slices/ProductSlice";

function AddNewProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categoryIndex, setCategoryIndex] = useState("");

  const [addProduct] = useAddProductMutation();
  const { refetch: refetchPoducts } = useGetProductsQuery();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onCategoryChanged = (e) => {
    let i = Number(e.target.value);
    console.log(e.target.value);
    i = i + 1;
    console.log(e.target[i].text);
    setCategoryIndex(e.target.value);
  };

  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];

  const onAddProduct = async () => {
    let product = {
      title,
      price,
      description,
      category: categories[categoryIndex],
      id: nanoid(),
      image: "",
      rating: {},
    };
    console.log("onAddProduct", product);
    if (title && price) {
      try {
        await addProduct(product).unwrap();
        refetchPoducts();
        setTitle("");
        setPrice(0);
        setDescription("");
        setCategoryIndex("");
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  const categoryOptions = [...categories].map((category, index) => (
    <option key={index} value={index}>
      {category}
    </option>
  ));
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="price">Title:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={onPriceChanged}
        />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={categoryIndex}
          onChange={onCategoryChanged}
        >
          <option value=""></option>
          {categoryOptions}
        </select>
        <label htmlFor="description">Content:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={onDescriptionChanged}
        />
        <button type="button" onClick={onAddProduct}>
          Add Product
        </button>
      </form>
    </section>
  );
}

export default AddNewProduct;
