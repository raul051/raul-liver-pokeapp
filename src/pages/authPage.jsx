import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./authPage.css";
/**
 * Componente AuthPage para la autenticación de usuarios (inicio de sesión y registro).
 *
 * Renderiza un formulario que permite a los usuarios iniciar sesión o registrarse usando su correo electrónico y contraseña.
 * Gestiona el envío del formulario, muestra errores y permite alternar entre los modos de inicio de sesión y registro.
 *
 * @component
 *
 * @example
 * <Route path="/auth" element={<AuthPage />} />
 *
 * @returns {JSX.Element} Interfaz de la página de autenticación.
 */
const AuthPage = () => {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(email, password);
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>Pokédex Liverpool</h1>
        <p>Explora las estadísticas y características de tus Pokémon favoritos.</p>
      </div>
      <div className="auth-right">
        <div className="auth-form">
          <h2>{isLogin ? "Iniciar sesión" : "Registrarse"}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button className="login-button" type="submit">{isLogin ? "Entrar" : "Registrarse"}</button>
          </form>
          <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
            {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
