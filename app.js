const mybtn = document.getElementById("btn");
const aboutMe = document.querySelector(".about-me-text-container p");

mybtn.addEventListener("click", () => {
  console.log("clicked");
  let last = document.getElementsByTagName("p")[0];
  const input = document.getElementById("main");
  let p = document.createElement("p");
  p.style.color = "blue";
  p.style.fontWeight = "bold";
  p.textContent = input.value;
  aboutMe.appendChild(p);
  input.value = "";
});
