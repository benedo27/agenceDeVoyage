function showSection(id) {
  // cacher toutes les sections
  const sections = document.querySelectorAll("section");
  sections.forEach(section => section.style.display = "none");

  // afficher la section demandée
  document.getElementById(id).style.display = "block";
}