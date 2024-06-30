
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import "./Sidebar.css";
export const Sidebar = () => {
return (
  <div>
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>add item</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List item</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>orders item</p>
        </NavLink>
      </div>
    </div>
  </div>
);
}
