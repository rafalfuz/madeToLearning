const numA = document.querySelector("#inputOne");
const numB = document.querySelector("#inputTwo");
const form = document.querySelector("form");
const submitBtn = document.querySelector("#submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const numberA = Number(numA.value);
  const numberB = Number(numB.value);

  const res = fetch("/check", {
    method: "POST",
    body: JSON.stringify({
      numberA,
      numberB,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  console.log(data);
});
