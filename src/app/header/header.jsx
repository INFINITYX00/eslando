import HeaderCSS from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={HeaderCSS.header}>
      <img src="./relabel.png" alt="Relabel" />
      </header>
    </>
  );
}
