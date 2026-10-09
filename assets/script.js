document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "✕" : "☰";
    });
  }

  const showMessage = (form, message, isError = false) => {
    const output = form.querySelector(".form-message");
    if (output) {
      output.textContent = message;
      output.style.color = isError ? "#b33b3b" : "#1c7658";
    }
  };

  const signup = document.getElementById("signup-form");
  if (signup) {
    signup.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("signup-name").value.trim();
      const email = document.getElementById("signup-email").value.trim().toLowerCase();
      const password = document.getElementById("signup-password").value;
      const confirm = document.getElementById("signup-confirm").value;
      if (password !== confirm) return showMessage(signup, "Passwords do not match.", true);
      if (password.length < 8) return showMessage(signup, "Use at least 8 characters for the password.", true);
      try {
        const users = JSON.parse(localStorage.getItem("suDemoUsers") || "{}");
        if (users[email]) return showMessage(signup, "An account with this email already exists. Please log in.", true);
        users[email] = { name, password };
        localStorage.setItem("suDemoUsers", JSON.stringify(users));
        showMessage(signup, "Demo account created! You can now log in.");
        signup.reset();
      } catch (error) {
        showMessage(signup, "Browser storage is unavailable. Try another browser.", true);
      }
    });
  }

  const login = document.getElementById("login-form");
  if (login) {
    login.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("login-email").value.trim().toLowerCase();
      const password = document.getElementById("login-password").value;
      try {
        const users = JSON.parse(localStorage.getItem("suDemoUsers") || "{}");
        if (users[email] && users[email].password === password) {
          sessionStorage.setItem("suDemoLoggedIn", email);
          showMessage(login, `Welcome back, ${users[email].name}! This is a demo login.`);
        } else {
          showMessage(login, "Email or password not found. Create a demo account first.", true);
        }
      } catch (error) {
        showMessage(login, "Browser storage is unavailable. Try another browser.", true);
      }
    });
  }

  const contact = document.getElementById("contact-form");
  if (contact) {
    contact.addEventListener("submit", (event) => {
      event.preventDefault();
      showMessage(contact, "Thanks! This demo form is working locally, but no message was sent. Connect a form service to receive submissions.");
      contact.reset();
    });
  }
});