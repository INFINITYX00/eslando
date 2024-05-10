import FooterCSS from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={FooterCSS.footer}>
        <span className={FooterCSS.footerP}>
          Powered by <b> Relabel</b>
        </span>
      </footer>
    </>
  );
}
