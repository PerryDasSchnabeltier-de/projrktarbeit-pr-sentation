// JS: Sidebar öffnen und schließen
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const openButton = document.getElementById('sidebarToggle');
const closeButton = document.getElementById('sidebarClose');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('visible');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('visible');
}

openButton.addEventListener('click', openSidebar);
closeButton.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
