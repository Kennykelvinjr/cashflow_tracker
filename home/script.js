document.addEventListener("DOMContentLoaded", () => {
  let currentStep = 0;
  const formGroups = document.querySelectorAll(".form-group");

  window.nextStep = () => {
    if (currentStep < formGroups.length - 1) {
      formGroups[currentStep].classList.remove("active");
      currentStep++;
      formGroups[currentStep].classList.add("active");
    }
  };
});

