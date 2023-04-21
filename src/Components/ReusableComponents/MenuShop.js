import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMenu } from "../../app/Slices/MenuSlice";

function MenuShop() {
    const dispatch = useDispatch();

  const menuItems = [
    {
      link: "/products",
      name: "Products list",
    },
    {
      link: "products/add-product",
      name: "Add new product",
    },
    {
      link: "products/cart",
      name: "Cart",
    },
    
    {
      link: "/",
      name: "Top menu",
    },
  ];
  useEffect(() => {
    dispatch(loadMenu(menuItems));
  });
  
}

export default MenuShop