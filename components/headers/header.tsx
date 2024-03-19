import {
  FaArrowLeft,
  FaArrowRight,
  FaCaretLeft,
  FaCaretRight,
  FaSearch,
  FaShoppingBag,
} from "react-icons/fa";
import "./header.css";

export default function Headers() {
  return (
    <nav>
      <div className="upper-header">
        {["orders", "Help and returns", "Hi, John"].map((item, index) => (
          <span key={index} className="upper-header_items">
            {item}
          </span>
        ))}
      </div>
      <div className="lower-header">
        <h1>ECOMMERCE</h1>
        <div className="nav-items">
          {["Categories", "Sales", "Clearence", "New Stock", "Trending"].map(
            (item, index) => (
              <span key={index} className="upper-header_items">
                {item}
              </span>
            )
          )}
        </div>
        <div className="nav-icons">
          <span>
            <FaSearch />
          </span>
          <span>
            <FaShoppingBag />
          </span>
        </div>
      </div>
      <div className="offer-header">
        <FaCaretLeft />
        <p>Get 10% off on business signup</p>
        <FaCaretRight />
      </div>
    </nav>
  );
}
