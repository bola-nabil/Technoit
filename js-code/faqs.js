document.querySelectorAll(".faq-item").forEach((item) => {
  const toggleButton = item.querySelector(".faq-toggle");
  const answer = item.querySelector(".faq-answer");

  toggleButton.addEventListener("click", () => {
    // Toggle visibility of the answer
    const isVisible = answer.style.display === "block";
    answer.style.display = isVisible ? "none" : "block";

    // Change the button text
    toggleButton.innerHTML = isVisible
      ? `<i class="fa-solid fa-angle-down"></i>`
      : `<i class="fa-solid fa-angle-up"></i>`;
  });
  console.log(toggleButton.innerHTML);
});
