import HeaderCSS from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={HeaderCSS.header}>
        <img
          className={HeaderCSS.dppIcon}
          src="./dpp-icon.png"
          alt="A simple black passport icon with a globe on the front."
        />
      </header>
    </>
  );
}
