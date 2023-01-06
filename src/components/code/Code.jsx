import { useState } from "react";
import "./code.css";
import Jingle from "../../assets/konami.wav";
import Before from "../../assets/before.png";
import After from "../../assets/after.png";
import Logo from "../../assets/logo.png";

const Code = () => {
  const pressed = [];
  const secretCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter';
  let correct = true;
  const [image, setImage] = useState(`${Before}`);

  window.addEventListener('keydown', (event) => {
    const secret = document.querySelector('.secret');
    let jingle = new Audio(Jingle);
    pressed.push(event.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
    if (pressed.join('').includes(secretCode) && correct) {
      jingle.play();
      correct = false;
      setImage(`${After}`);
      secret.innerHTML =`<img src=${Logo} class="logo" alt=""></img>`
    }
    console.log(pressed.join(''))
  });

  return (
    <section className="code">
      <div class="image-container">
        <div class="secret"></div>
        <img src={image} class="ship" alt=""></img>
      </div>
    </section>
  );
};

export default Code;
