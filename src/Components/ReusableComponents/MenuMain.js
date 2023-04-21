import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMenu } from "../../app/Slices/MenuSlice";

function MenuMain() {
    const dispatch = useDispatch();

  const menuItems = [
    {
      link: "posts",
      name: "Posts top",
    },
    {
      link: "users",
      name: "Users top",
    },
    {
      link: "products",
      name: "Products",
    },
  ];
  useEffect(() => {
    dispatch(loadMenu(menuItems));
  });
  
}

export default MenuMain