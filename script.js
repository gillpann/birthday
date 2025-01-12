function checkName() {
  const nameInput = document
    .getElementById("nameInput")
    .value.toLowerCase()
    .trim();
  const validNames = ["nida", "nida khansa", "nida khansa fauziah"];

  // Jika input kosong
  if (!nameInput) {
    Swal.fire({
      title: "Oops!",
      text: "Please enter your name first!",
      icon: "warning",
      confirmButtonColor: "#ff6b6b",
    });
    return;
  }

  // Jika nama benar
  if (validNames.includes(nameInput)) {
    Swal.fire({
      title: "Yay! Welcome My Love! ❤️",
      text: "I've been waiting for you!",
      icon: "success",
      confirmButtonColor: "#ff6b6b",
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById("nameCard").classList.add("hidden");
        document.getElementById("birthdayCard").classList.remove("hidden");
        startTypingAnimation();
        // Mulai memutar musik
        const bgMusic = document.getElementById("bgMusic");
        bgMusic.play();
      }
    });
  } else {
    // Jika nama salah
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

I want to take this moment to wish you the happiest of birthdays! 🎉

Every day with you is a gift, and I'm grateful for all the beautiful moments we share together. Your smile brightens my world, and your love makes every day special.

May this year bring you all the joy, success, and happiness you deserve. You're not just my girlfriend, you're my best friend, my support system, and my favorite person.

I love you more with each passing day! ❤️

Happy Birthday, sweetheart! 🎂✨

From your Boyfriend, Gilvan`;

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
      setTimeout(type, 50);
    }
  }

  type();
}

function shakeInput() {
  const input = document.getElementById("nameInput");
  input.classList.add("shake");
  setTimeout(() => input.classList.remove("shake"), 500);
}

// Event listener untuk tombol Enter
document
  .getElementById("nameInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      checkName();
    }
  });
