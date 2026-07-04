/**
 * Light and dark mode
 */

const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | String} */ isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {

  $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);

}

$themeBtn.addEventListener("click", changeTheme);



// Active Modal Tracker for Keyboard Navigation
let activeModalType = 0;

// Change Image For Project 1
let currentIndex = 0;
const images = [
  "../assets/images/Projects/Hotel Management System/1.png",
  "../assets/images/Projects/Hotel Management System/2.png",
  "../assets/images/Projects/Hotel Management System/3.png"
];

function openModal(index) {
  activeModalType = 1;
  currentIndex = index;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images[currentIndex];
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  activeModalType = 0;
  document.getElementById("myModal").style.display = "none";
}

function changeSlide(direction) {
  currentIndex += direction;

  // Wrap around if necessary
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  document.getElementById("modalImage").src = images[currentIndex];
}


// Change Image For Project 2
let currentIndex2 = 0;
const images2 = [
  "../assets/images/Projects/Track's Number & PhoneBook/1.png",
  "../assets/images/Projects/Track's Number & PhoneBook/2.png",
  "../assets/images/Projects/Track's Number & PhoneBook/3.png",
  "../assets/images/Projects/Track's Number & PhoneBook/4.png"
];

function openModal2(index) {
  activeModalType = 2;
  currentIndex2 = index;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images2[currentIndex2];
  document.getElementById("myModal").style.display = "block";
}

function closeModal2() {
  activeModalType = 0;
  document.getElementById("myModal").style.display = "none";
}

function changeSlide2(direction) {
  currentIndex2 += direction;

  // Wrap around if necessary
  if (currentIndex2 < 0) {
    currentIndex2 = images2.length - 1;
  } else if (currentIndex2 >= images2.length) {
    currentIndex2 = 0;
  }

  document.getElementById("modalImage").src = images2[currentIndex2];
}


// Change Image For Project 3 (Vault-AI)
let currentIndex3 = 0;
const images3 = [
  "../assets/images/Projects/Vault-AI/1.png",
  "../assets/images/Projects/Vault-AI/2.png",
  "../assets/images/Projects/Vault-AI/3.png",
  "../assets/images/Projects/Vault-AI/4.png",
  "../assets/images/Projects/Vault-AI/5.png",
  "../assets/images/Projects/Vault-AI/6.png",
  "../assets/images/Projects/Vault-AI/7.png",
  "../assets/images/Projects/Vault-AI/8.png",
  "../assets/images/Projects/Vault-AI/9.png",
  "../assets/images/Projects/Vault-AI/10.png"
];

function openModal3(index) {
  activeModalType = 3;
  currentIndex3 = index;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images3[currentIndex3];
  document.getElementById("myModal").style.display = "block";
}

function closeModal3() {
  activeModalType = 0;
  document.getElementById("myModal").style.display = "none";
}

function changeSlide3(direction) {
  currentIndex3 += direction;

  if (currentIndex3 < 0) {
    currentIndex3 = images3.length - 1;
  } else if (currentIndex3 >= images3.length) {
    currentIndex3 = 0;
  }

  document.getElementById("modalImage").src = images3[currentIndex3];
}


// Change Image For Project 4 (SmartFit AI)
let currentIndex4 = 0;
const images4 = [
  "../assets/images/Projects/SmartFit AI/1.png",
  "../assets/images/Projects/SmartFit AI/2.png",
  "../assets/images/Projects/SmartFit AI/3.png",
  "../assets/images/Projects/SmartFit AI/4.png",
  "../assets/images/Projects/SmartFit AI/5.png"
];

function openModal4(index) {
  activeModalType = 4;
  currentIndex4 = index;
  const modalImage = document.getElementById("modalImage");
  modalImage.src = images4[currentIndex4];
  document.getElementById("myModal").style.display = "block";
}

function closeModal4() {
  activeModalType = 0;
  document.getElementById("myModal").style.display = "none";
}

function changeSlide4(direction) {
  currentIndex4 += direction;

  if (currentIndex4 < 0) {
    currentIndex4 = images4.length - 1;
  } else if (currentIndex4 >= images4.length) {
    currentIndex4 = 0;
  }

  document.getElementById("modalImage").src = images4[currentIndex4];
}


// Keyboard Navigation Listener
window.addEventListener("keydown", (e) => {
  const modal = document.getElementById("myModal");
  const isModalOpen = modal && modal.style.display === "block";

  if (e.key === "Escape" || e.key === "Esc") {
    if (isModalOpen) {
      if (activeModalType === 1) closeModal();
      else if (activeModalType === 2) closeModal2();
      else if (activeModalType === 3) closeModal3();
      else if (activeModalType === 4) closeModal4();
      else modal.style.display = "none";
    } else {
      // If modal is not open, pressing Esc navigates back to index.html
      window.location.href = "../index.html";
    }
  } else if (isModalOpen) {
    if (e.key === "ArrowLeft") {
      if (activeModalType === 1) changeSlide(-1);
      else if (activeModalType === 2) changeSlide2(-1);
      else if (activeModalType === 3) changeSlide3(-1);
      else if (activeModalType === 4) changeSlide4(-1);
    } else if (e.key === "ArrowRight") {
      if (activeModalType === 1) changeSlide(1);
      else if (activeModalType === 2) changeSlide2(1);
      else if (activeModalType === 3) changeSlide3(1);
      else if (activeModalType === 4) changeSlide4(1);
    }
  }
});

// Click outside modal image to close
window.addEventListener("click", (e) => {
  const modal = document.getElementById("myModal");
  if (e.target === modal && modal.style.display === "block") {
    if (activeModalType === 1) closeModal();
    else if (activeModalType === 2) closeModal2();
    else if (activeModalType === 3) closeModal3();
    else if (activeModalType === 4) closeModal4();
    else modal.style.display = "none";
  }
});
