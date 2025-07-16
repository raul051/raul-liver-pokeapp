import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isDetailPage = location.pathname.includes("/detail");

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-content">
        {isDetailPage && (
          <button className="back-button" onClick={() => navigate(-1)}>
            ←
          </button>
        )}
        <span className="app-name">Pokédex Liverpool</span>

        {user && (
          <button className="logout-button" onClick={handleLogout}>
            Cerrar sesión
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;