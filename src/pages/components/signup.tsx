import React, { useState } from "react";

const Email = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null as string | null,
  });

  // Replace this with your actual deployed Google Apps Script URL for writing
  const SHEETS_URL =
    "https://script.google.com/macros/s/AKfycbxYcMDvLCFxiGNX7WYMqgCM5OAIXrD4lhX_PuylMeCCRf5cZSnEu2oZKsyQsFoYQwnz-w/exec";

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    if (!validateEmail(email)) {
      setStatus({
        loading: false,
        success: false,
        error: "Please enter a valid email address",
      });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      const now = new Date();
      const currentDate = now.toLocaleDateString();

      const params = new URLSearchParams({
        name: name,
        email: email,
        date: currentDate,
      });

      const img = new Image();
      await new Promise((resolve) => {
        img.onload = img.onerror = resolve;
        img.src = `${SHEETS_URL}?${params.toString()}`;
      });

      setStatus({
        loading: false,
        success: true,
        error: null,
      });

      // Clear form after successful submission
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error saving email:", error);
      setStatus({
        loading: false,
        success: false,
        error: "Failed to subscribe. Please try again.",
      });
    }
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center" as const,
    },
    description: {
      fontSize: "16px",
      textAlign: "center" as const,
      margin: "20px 0",
      color: "#666",
    },
    form: {
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
    },
    disabledButton: {
      backgroundColor: "#cccccc",
      cursor: "not-allowed",
    },
    message: {
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "4px",
      textAlign: "center" as const,
    },
    success: {
      backgroundColor: "#d4edda",
      color: "#155724",
    },
    error: {
      backgroundColor: "#f8d7da",
      color: "#721c24",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Send me emails about this</h1>

      <div style={styles.description}>
        Subscribe to my email list to receive updates about this.
      </div>

      {!status.success ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="Enter your email"
            required
          />

          {status.error && (
            <div style={{ ...styles.message, ...styles.error }}>
              {status.error}
            </div>
          )}

          <button
            type="submit"
            disabled={status.loading || !name || !email}
            style={{
              ...styles.button,
              ...(status.loading || !name || !email
                ? styles.disabledButton
                : {}),
            }}
          >
            {status.loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      ) : (
        <div style={{ ...styles.message, ...styles.success }}>
          Thanks! I'll be in contact soon.
        </div>
      )}
    </div>
  );
};

export default Email;
