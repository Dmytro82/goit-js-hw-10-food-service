const inputRefs = document.querySelector('#theme-switch-toggle');
const bodyRefs = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (localStorage.getItem('theme') === Theme.DARK) {
  bodyRefs.classList.add(Theme.DARK);
  inputRefs.setAttribute('checked', 'true');
}

inputRefs.addEventListener('change', onThemeChange);

function onThemeChange() {
  if (bodyRefs.classList.contains(Theme.DARK)) {
    themeLight();
    // bodyRefs.classList.add(Theme.LIGHT);
    // bodyRefs.classList.remove(Theme.DARK);
    // localStorage.setItem('theme', `${Theme.LIGHT}`);
  } else {
    themeDark();
    // bodyRefs.classList.add(Theme.DARK);
    // bodyRefs.classList.remove(Theme.LIGHT);
    // localStorage.setItem('theme', `${Theme.DARK}`);
  }
}

function themeLight() {
  bodyRefs.classList.add(Theme.LIGHT);
  bodyRefs.classList.remove(Theme.DARK);
  localStorage.setItem('theme', `${Theme.LIGHT}`);
}
function themeDark() {
  bodyRefs.classList.add(Theme.DARK);
  bodyRefs.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', `${Theme.DARK}`);
}
