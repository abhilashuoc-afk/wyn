function searchNow() {
  alert("Search feature will be connected soon!");
}
/* AUTO DATE */
const todayDate = new Date().toLocaleDateString("en-IN", {
  weekday: "short",
  day: "numeric",
  month: "short"
});
document.getElementById("todayDate").innerText = todayDate;

/* LANGUAGE TOGGLE */
let lang = "en";

function toggleLang() {
  const slides = document.querySelectorAll("#wayanadTodayCarousel .carousel-item");

  if (lang === "en") {
    slides[0].innerHTML = "🌧️ വയനാട്ടിൽ മഴ മുന്നറിയിപ്പ്";
    slides[1].innerHTML = "🎉 മാനന്തവാടിയിൽ പ്രാദേശിക ഉത്സവം";
    slides[2].innerHTML = "🚧 ഘാട്ട് റോഡിൽ ട്രാഫിക് നിയന്ത്രണം";
    slides[3].innerHTML = "🏞️ ഇന്ന് വിനോദസഞ്ചാരികളുടെ തിരക്ക്";
    slides[4].innerHTML = "🌿 സഞ്ചാരത്തിന് അനുയോജ്യമായ കാലാവസ്ഥ";
    lang = "ml";
  } else {
    slides[0].innerHTML = "🌧️ Rain alert in Vythiri & Mananthavady";
    slides[1].innerHTML = "🎉 Local festival at Mananthavady Town";
    slides[2].innerHTML = "🚧 Traffic advisory – Ghat Road";
    slides[3].innerHTML = "🏞️ Tourist rush expected today";
    slides[4].innerHTML = "🌿 Perfect weather for sightseeing";
    lang = "en";
  }
}
