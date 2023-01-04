import React from 'react';
import "./code.css";
import After from "../../assets/after.png";
import Before from "../../assets/before.png";
import KonamiWav from "../../assets/konami.wav";
import Logo from "../../assets/logo.png";

const Code = () => {
  const pressed = [];
  const secretCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
  let correct = true;

  window.addEventListener('keydown', (event) => {
    const secret = document.querySelector('.secret');
    pressed.push(event.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
    if (pressed.join('').includes(secretCode) && correct) {
      let jingle = new Audio({KonamiWav});
      jingle.play();
      correct = false;
      secret.innerHTML =`<img src=${Logo} class="logo" alt=""></img>`
      document.getElementById("ship").src = {After}
    }
    console.log(pressed.join(''))
  });

  function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('highlight');
  }

  function highlight(event) {
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    key.classList.add('highlight');
  };

  window.addEventListener('keydown', highlight);

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  return (
    <section className="konamicode">
      <div class="keyboard">
      <div class="keys">
        <div data-key="37" class="key"><kbd class="keypress">←</kbd></div>
        <div data-key="38" class="key"><kbd class="keypress">↑</kbd></div>
        <div data-key="40" class="key"><kbd class="keypress">↓</kbd></div>
        <div data-key="39" class="key"><kbd class="keypress">→</kbd></div>
        <div data-key="65" class="key"><kbd class="keypress">A</kbd></div>
        <div data-key="66" class="key"><kbd class="keypress">B</kbd></div>
        <div data-key="13" class="key enter"><kbd class="keypress">START</kbd></div>
      </div>
    </div>
    <div class="image-container">
      <div class="secret"></div>
      <img src={Before} id="ship" alt=""></img>
    </div>
  </section>
  );
};

export default Code;
