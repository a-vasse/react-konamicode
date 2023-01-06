import { useEffect, useState } from "react";

const Keys = (props) => {
  const [pressed, setPressed] = useState(false);
	const press = () => {
		setPressed(true);
		setTimeout(() => {
			setPressed(false);
		}, 100);
	};

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key === props.letter) {
				press();
			}
		});
	}, []);

  return (
    <section className="keys">
      <div class="keys">
        <div className={`key ${pressed ? "pressed" : ""}`} onClick={press}>
          <kbd class="keypress">{props.symbol}</kbd>
        </div>
      </div>
    </section>
  );
};

export default Keys;
