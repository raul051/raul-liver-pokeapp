import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isDetailPage = location.pathname.includes("/detail");

  return (
    <header className="header">
      <div className="header-content">
        {isDetailPage && (
          <button className="back-button" onClick={() => navigate(-1)}>
            ←
          </button>
        )}
        <span className="app-name">Pokédex Liverpool</span>
      </div>
    </header>
  );
};

export default Header;
