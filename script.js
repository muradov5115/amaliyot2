const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const loginForm = document.getElementById('login-form');
const errorMsg = document.getElementById('error-msg');
const langSelect = document.getElementById('lang');
const loginTitle = document.getElementById('login-title');
const labelUser = document.getElementById('label-user');
const labelPass = document.getElementById('label-pass');
const CORRECT_USER = 'Abdulaziz';
const CORRECT_PASS = '102gentra';
const translations = {
  uz: {
    title: "Yana keldimi san",
    user: "Ustozimi ismlarini yoz",
    pass: "Ustozimi moshinalrini nomeri bilan nomini yoz",
    btn: "Kirasami",
    emptyUser: "ID yoz",
    emptyPass: "Parol yoz",
    success: "Kirdin chort",
    wrong: "Aldama chort togri yoz"
  },
  ru: {
    title: "Яна келдими сан",
    user: "Устозими исмларини йоз",
    pass: "Устозими мошиналарини номери билан номини йоз",
    btn: "Кирасами",
    emptyUser: "ID йоз",
    emptyPass: "Пароль йоз",
    success: "Кирдин чорт",
    wrong: "Алдама чорт тори йоз"
  }
};
let currentLang = 'uz';
function applyLang(lang) {
  loginTitle.textContent = translations[lang].title;
  labelUser.textContent = translations[lang].user;
  labelPass.textContent = translations[lang].pass;
  loginButton.textContent = translations[lang].btn;
}
applyLang(currentLang);
langSelect.addEventListener('change', (e) => {
  currentLang = e.target.value;
  applyLang(currentLang);
});
function checkInputs() {
  const u = usernameInput.value.trim();
  const p = passwordInput.value;
  if (u && p) {
    loginButton.disabled = false;
    loginButton.classList.add('enabled');
  } else {
    loginButton.disabled = true;
    loginButton.classList.remove('enabled');
  }
}
usernameInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const u = usernameInput.value.trim();
  const p = passwordInput.value;
  if (!u) {
    showError(translations[currentLang].emptyUser);
    return;
  }
  if (!p) {
    showError(translations[currentLang].emptyPass);
    return;
  }
  if (u === CORRECT_USER && p === CORRECT_PASS) {
    alert("✅ " + translations[currentLang].success);
  } else {
    showError(translations[currentLang].wrong);
  }
});
function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.style.visibility = 'visible';
}