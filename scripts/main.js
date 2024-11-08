const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    const icon = faq.querySelector(".faq-icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

function showProfile(member) {
  const blurImage = document.querySelector(".player");
  const playerProfile = document.querySelector(".player-data-1");
  const playerProfile2 = document.querySelector(".player-data-2");
  const playerProfile3 = document.querySelector(".player-data-3");
  const playerProfile4 = document.querySelector(".player-data-4");
  const playerProfile5 = document.querySelector(".player-data-5");
  const playerProfile6 = document.querySelector(".player-data-6");
  const playerProfile7 = document.querySelector(".player-data-7");
  const playerProfile8 = document.querySelector(".player-data-8");
  const playerProfile9 = document.querySelector(".player-data-9");
  const playerProfile10 = document.querySelector(".player-data-10");
  const playerProfile11 = document.querySelector(".player-data-11");
  const playerProfile12 = document.querySelector(".player-data-12");
  const playerProfile13 = document.querySelector(".player-data-13");
  const playerProfile14 = document.querySelector(".player-data-14");
  const playerProfile15 = document.querySelector(".player-data-15");
  const playerProfile16 = document.querySelector(".player-data-16");
  const playerProfile17 = document.querySelector(".player-data-17");
  const playerProfile18 = document.querySelector(".player-data-18");
  const playerProfile19 = document.querySelector(".player-data-19");
  const playerProfile20 = document.querySelector(".player-data-20");
  const playerProfile21 = document.querySelector(".player-data-21");
  const playerProfile22 = document.querySelector(".player-data-22");
  const playerProfile23 = document.querySelector(".player-data-23");

  if (member === "omezibe") {
    playerProfile.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile.addEventListener("click", () => {
      playerProfile.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "emeka") {
    playerProfile2.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile2.addEventListener("click", () => {
      playerProfile2.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "ebuka") {
    playerProfile3.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile3.addEventListener("click", () => {
      playerProfile3.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "tochukwu") {
    playerProfile4.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile4.addEventListener("click", () => {
      playerProfile4.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "chidiebere") {
    playerProfile5.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile5.addEventListener("click", () => {
      playerProfile5.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "ifeanyi") {
    playerProfile6.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile6.addEventListener("click", () => {
      playerProfile6.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "obed") {
    playerProfile7.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile7.addEventListener("click", () => {
      playerProfile7.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "samuel-n") {
    playerProfile8.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile8.addEventListener("click", () => {
      playerProfile8.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "kingsley") {
    playerProfile9.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile9.addEventListener("click", () => {
      playerProfile9.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "trust") {
    playerProfile10.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile10.addEventListener("click", () => {
      playerProfile10.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "onyekachi") {
    playerProfile11.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile11.addEventListener("click", () => {
      playerProfile11.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "chinedu-o") {
    playerProfile12.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile12.addEventListener("click", () => {
      playerProfile12.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "jonathan") {
    playerProfile13.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile13.addEventListener("click", () => {
      playerProfile13.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "anderson") {
    playerProfile14.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile14.addEventListener("click", () => {
      playerProfile14.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "kelechi") {
    playerProfile15.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile15.addEventListener("click", () => {
      playerProfile15.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "ejike") {
    playerProfile16.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile16.addEventListener("click", () => {
      playerProfile16.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "zebulon") {
    playerProfile17.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile17.addEventListener("click", () => {
      playerProfile17.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "jude") {
    playerProfile18.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile18.addEventListener("click", () => {
      playerProfile18.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "samuel-o") {
    playerProfile19.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile19.addEventListener("click", () => {
      playerProfile19.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "akachukwu") {
    playerProfile20.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile20.addEventListener("click", () => {
      playerProfile20.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "chinedu-e") {
    playerProfile21.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile21.addEventListener("click", () => {
      playerProfile21.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "daniel") {
    playerProfile22.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile22.addEventListener("click", () => {
      playerProfile22.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  } else if (member === "anthony") {
    playerProfile23.classList.add("player-data-show");
    blurImage.classList.add("blur");

    playerProfile23.addEventListener("click", () => {
      playerProfile23.classList.remove("player-data-show");
      blurImage.classList.remove("blur");
    });
  }
}
