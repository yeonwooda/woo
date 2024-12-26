document.addEventListener("DOMContentLoaded", () => {
  const projectContainers = document.querySelectorAll(".project__container");

  projectContainers.forEach((container) => {
    const toggleElements = container.querySelectorAll(
      ".project__img, .project__title"
    );
    const description = container.querySelector(".project__description");
    const closeButton = description
      ? description.querySelector(".close-description")
      : null;

    if (description) {
      toggleElements.forEach((element) => {
        element.addEventListener("click", () => {
          // 설명 창을 보여주거나 숨기기
          if (
            description.style.display === "none" ||
            !description.style.display
          ) {
            description.style.display = "block";
          } else {
            description.style.display = "none";
          }
        });
      });

      // 닫기 버튼 클릭 시 설명 창 숨기기
      if (closeButton) {
        closeButton.addEventListener("click", () => {
          description.style.display = "none";
        });
      }
    }
  });
});
