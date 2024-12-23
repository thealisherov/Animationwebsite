document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loadingScreen");
    const content = document.getElementById("content");
  
    // Simulyatsiya uchun 3 soniya kutish
    setTimeout(() => {
      loadingScreen.style.display = "none"; // Loading ekranini yashirish
      content.style.display = "block"; // Asosiy kontentni ko'rsatish
    }, 3000);
  });
  