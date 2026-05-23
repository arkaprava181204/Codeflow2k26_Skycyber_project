import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../index.css";

export default function Login({ onAuthenticate, onSocialLogin }) {
  const navigate = useNavigate();
  const [role, setRole] = useState("business");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const mockAuth = ({ email, password, role }) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve({ user: { email, role } });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 700);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) return setError("Please enter your email.");
    if (!password) return setError("Please enter your password.");

    setLoading(true);

    try {
      const authFn = onAuthenticate || mockAuth;

      const result = await authFn({
        email: email.trim(),
        password,
        remember,
        role,
      });

      //console.log("Authenticated:", result);
      localStorage.setItem("userRole", role);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocial = async (provider) => {
    setError("");
    setLoading(true);

    try {
      const socialFn =
        onSocialLogin || ((p) => Promise.resolve({ provider: p }));

      const result = await socialFn(provider);
      console.log("Social login result:", result);
    } catch (err) {
      setError(err.message || "Social login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="icr-wrapper">
      <div className="icr-page">
        <section className="icr-left">
          <div className="icr-badge">Hyperlocal Digital Execution Marketplace</div>

          <h1>I-COCKROACH</h1>

          <p>
            A verified platform where businesses post digital tasks and skilled
            students pitch, complete, track, and get paid securely.
          </p>

          <div className="icr-feature-grid">
            <div>AI job matching</div>
            <div>Escrow payments</div>
            <div>Student pitches</div>
            <div>Task tracking</div>
          </div>
        </section>

        <section className="icr-card" role="main" aria-labelledby="login-title">
          <div className="icr-topbar">
            <div>
              <h2 id="login-title">Welcome back</h2>
              <p>Sign in to continue</p>
            </div>
          </div>

          <form className="icr-form" onSubmit={handleSubmit} noValidate>
            <div className="icr-role-select">
              <button
                type="button"
                className={`icr-role-btn ${
                  role === "business" ? "active" : ""
                }`}
                onClick={() => setRole("business")}
              >
                Business
              </button>

              <button
                type="button"
                className={`icr-role-btn ${
                  role === "individual" ? "active" : ""
                }`}
                onClick={() => setRole("individual")}
              >
                Individual
              </button>
            </div>

            <label className="icr-label">
              Email
              <input
                type="email"
                className="icr-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={
                  role === "business"
                    ? "owner@business.com"
                    : "student@email.com"
                }
                autoComplete="email"
                required
              />
            </label>

            <label className="icr-label">
              Password
              <div className="icr-password-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  className="icr-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  minLength={6}
                />

                <button
                  type="button"
                  className="icr-toggle"
                  onClick={() => setShowPassword((s) => !s)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <div className="icr-row">
              <label className="icr-remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>

              <button type="button" className="icr-link">
                Forgot?
              </button>
            </div>

            {error && (
              <div role="alert" className="icr-error">
                {error}
              </div>
            )}

            <button className="icr-submit" type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="icr-divider">
            <span>Or continue with</span>
          </div>

          <div className="icr-socials">
            <button onClick={() => handleSocial("google")}>Google</button>
            <button onClick={() => handleSocial("github")}>GitHub</button>
            <button onClick={() => handleSocial("linkedin")}>LinkedIn</button>
          </div>

          <div className="icr-footer">
            <span>Don't have an account?</span>
            <button>Create account</button>
          </div>
        </section>
      </div>
    </div>
  );
}