import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axiosInstance";
import "../../../assets/css/admin/login.css";
import logo from "../../../assets/image/logo.png";

const Login = () => {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const submitLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setInfo("");
      setError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setInfo("Logging you in...");

      const res = await api.post("/login", { email, password });
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      const userRes = await api.get("/me");
      localStorage.setItem("authUser", JSON.stringify(userRes.data.user));

      nav("/admin/manage-clients");
      setInfo("Login successful. Redirecting...");
    } catch (err) {
      const message =
        err.response?.data?.error ||
        err.response?.data?.message ||
        "Invalid email or password.";
      setInfo("");
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      nav("/admin/manage-clients", { replace: true });
    }
  }, []);

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-header">
          <div>
            <div className="login-title">Welcome back</div>
            <p className="login-subtitle">Login to continue</p>
          </div>
          <div className="login-icon">
            <img src={logo} alt="logo" />
          </div>
        </div>

        {error && <div className="login-alert login-alert-error">{error}</div>}
        {info && !error && (
          <div className="login-alert login-alert-info">{info}</div>
        )}

        <form className="login-form" onSubmit={submitLogin}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          {/* PASSWORD FIELD WITH TOGGLE */}
          <div className="form-group password-group">
            <label className="form-label">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
