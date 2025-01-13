function checkName() {
  const nameInput = document
    .getElementById("nameInput")
    .value.toLowerCase()
    .trim();
  const validNames = ["nida", "nida khansa", "nida khansa fauziah"];

  if (!nameInput) {
    Swal.fire({
      title: "Oops!",
      text: "Please enter your name first!",
      icon: "warning",
      confirmButtonColor: "#ff6b6b",
    });
    return;
  }

  if (validNames.includes(nameInput)) {
    Swal.fire({
      title: "Yay! Welcome My Love! ❤️",
      text: "I've been waiting for you!",
      icon: "success",
      confirmButtonColor: "#ff6b6b",
    }).then((result) => {
      if (result.isConfirmed) {
        const nameCard = document.getElementById("nameCard");
        const birthdayCard = document.getElementById("birthdayCard");

        // Hide name card and show birthday card
        nameCard.classList.add("hidden");
        birthdayCard.classList.remove("hidden");

        // Start typing animation, floating hearts, and play music
        startTypingAnimation();
        startFloatingHearts();
        const bgMusic = document.getElementById("bgMusic");
        bgMusic.play();
      }
    });
  } else {
    Swal.fire({
      title: "Access Denied!",
      text: "You're not my girlfriend! 😤",
      icon: "error",
      confirmButtonColor: "#ff6b6b",
    });
    shakeInput();
  }
}

function startTypingAnimation() {
  const text = `Dear Nida,

On your special day, I want to take a moment to celebrate you, the most wonderful person in my life. 🎉

Every day with you feels like a gift, and I'm endlessly grateful for all the memories we've created together. Your smile lights up my world, your love fills my heart, and your presence makes every moment extraordinary.

I'll always cherish the little things, like the way you laugh when I tell silly jokes or how your eyes light up when we talk about our dreams. May this year bring you closer to everything you hope for, and may your days be filled with boundless joy, remarkable achievements, and endless love.

You are not just my girlfriend, you are my best friend, my inspiration, and my everything.  
With every passing day, my love for you grows stronger. ❤️

Happy Birthday, my sweetheart! You mean the world to me. 🎂✨

No matter what happens, I'll always be here for you, cheering for your successes and holding your hand through every challenge. I love you, now and always.  

Forever yours,  
Gilvan`;

  const typingText = document.getElementById("typingText");
  let index = 0;

  function type() {
    if (index < text.length) {
      if (text[index] === "\n") {
        typingText.innerHTML += "<br>";
      } else {
        typingText.innerHTML += text[index];
      }
      index++;
      setTimeout(type, 80);
    }
  }

  type();
}

function startFloatingHearts() {
  const maxHearts = 5;
  const interval = setInterval(() => {
    if (document.querySelectorAll(".floating-heart").length < maxHearts) {
      createHeart();
    }
  }, 4000);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.classList.add("floating-heart");
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

function shakeInput() {
  const input = document.getElementById("nameInput");
  input.classList.add("shake");
  setTimeout(() => input.classList.remove("shake"), 500);
}

document
  .getElementById("nameInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      checkName();
    }
  });
