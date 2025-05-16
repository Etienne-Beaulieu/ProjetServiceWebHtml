const API_BASE = "https://etiennebeaulieuapitaches.onrender.com/api/users";

// Création d'un nouvel user dans la bd avec fetch
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const prenom = document.getElementById('prenom').value;
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prenom, nom, email, password })
  });

  const result = await response.json();
  const resultDiv = document.getElementById('registerResult');
  if (response.ok) {
    resultDiv.innerHTML = `Utilisateur créé !<br>Clé API : <strong>${result.apiKey}</strong>`;
    resultDiv.className = "result success";
  } else {
    resultDiv.innerHTML = `Erreur : ${result.error}`;
    resultDiv.className = "result error";
  }
});

// Récupération ou régénération de clé API
document.getElementById('cleapiForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('emailCle').value;
  const password = document.getElementById('passwordCle').value;
  const regenerate = document.getElementById('regenerate').checked;

  const response = await fetch(`${API_BASE}/apikey`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, regenerate })
  });

  const result = await response.json();
  const resultDiv = document.getElementById('cleapiResult');
  if (response.ok) {
    resultDiv.innerHTML = `Clé API : <strong>${result.apiKey}</strong>`;
    resultDiv.className = "result success";
  } else {
    resultDiv.innerHTML = `Erreur : ${result.error}`;
    resultDiv.className = "result error";
  }
});
