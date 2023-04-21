import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMenu } from "../../app/Slices/MenuSlice";

function Menu() {
  const { menuItems } = useSelector(selectMenu);

  return (
    <div className="menu-container">
      <ul>
        {menuItems &&
          menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "blue" }
              }
            >
              {item.name}
            </NavLink>
          ))}
      </ul>
    </div>
  );
}

export default Menu;
