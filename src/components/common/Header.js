/* Import */
import React from "react";
import { Link } from "react-router-dom";
/* Component */
import Container from "../layout/Container";
import ButtonWrapper from "../layout/ButtonWrapper";
import Button from "../layout/Button";
/* CSS Module */
import styles from "../../css/module/common/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Link to="/" className={styles.header__logo}>
          <h1>LOGO</h1>
        </Link>
        <ButtonWrapper>
          <Button type="button" styleType="default" content="저장" />
          <Button type="button" styleType="primary" content="안 저장" />
        </ButtonWrapper>
      </Container>
    </header>
  )
}

export default Header;