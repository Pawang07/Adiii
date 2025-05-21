
const gifs = [
  { src: "./gifs/bday-1674.gif", message: "Happy Birthday Aditi! Enjoy your day like never before." },
  { src: "./gifs/jump.gif", message: "if i was this character." },
  { src: "./gifs/celeb.gif", message: "I’ll definitely jump straight from Jharkhand to Bengaluru to celebrate your birthday!" },
  { src: "./gifs/punch.gif", message: "mujhe pata hai ur going to  hit me like this someday ,mere harkto ke wjha se" },
  { src: "./gifs/astha_store.gif", message: "but we are going to celebrate ur next birthday at Astha Store At 12:00 AM😅" },
  { src: "./gifs/busy.gif", message: "Hope your birthday is as fabulous as your “just woke up” selfies as wild as your group chats, as drama-free as your phone when its on airplane mode📱✈️ and as easy like you ignore someone chats(Stay productive ,Stay busy) " },
  { src: "https://media.giphy.com/media/Z5zuypybI5dYc/giphy.gif", message: "adii be like , chalo bakswah band kro and ye btao where is my gifts." },
  { src: "./gifs/gttt.gif", message: "ill pay if you want anything just go to shop and buy...atleast gifts>= a chocolate, Happy Happy HappY Birthdayyyy Aditi, alfa to charlie signing off " }
];

let currentIndex = 0;

const gifElement = document.getElementById("gif");
const messageElement = document.getElementById("message");
const nextButton = document.getElementById("next-btn");

function updateContent() {
  messageElement.classList.remove("show");
  setTimeout(() => {
    gifElement.src = gifs[currentIndex].src;
    messageElement.textContent = gifs[currentIndex].message;
    messageElement.classList.add("show");
  }, 100);
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % gifs.length;
  updateContent();

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});
updateContent();
