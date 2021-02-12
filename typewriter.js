"use strict";

const typeLetters = (id, word, speed = 50) => {
  let index = 0;
  let element = document.getElementById(id);

  let timeOut = setInterval(function () {
    const cut = word[index];

    if (cut === "<") {
      index = word.indexOf(">", index);
    }

    element.innerHTML = word.slice(0, index);

    if (++index === sentence.length) {
      clearInterval(timeOut);
    }
  }, speed);
};

typeLetters("typewriter", "This text is written one character at a time", 50);
