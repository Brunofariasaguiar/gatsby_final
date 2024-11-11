import React from "react";
import * as footerStyles from "./footer.module.css";

export default function Footer(props) {
  return (
    <p className={footerStyles.footer}>
      © {props.copyrightYear} Estudos de Gatsby. Todos os direitos reservados.
    </p>
  );
}
