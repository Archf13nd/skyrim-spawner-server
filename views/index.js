const link = document.getElementById("link");

link.addEventListener("click", () => {
  fetch("/keypress", {
    method: "POST",
    body: JSON.stringify({
      entity: "dragon",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  console.log("request made");
});
