import { Container, Header } from "./styles";

import { Button } from "../../components/Button";

import logoLight from "../../assets/images/logo-light.svg";
import deviceMobile from "../../assets/images/mobile.png";

export function Home() {
  return (
    <Container>
      <Header>
        <div>
          <nav>
            <img src={logoLight} alt="" />
            <a href="#">Solicitar Acesso</a>
          </nav>
          <section>
            <h1>
              Dados <strong>adaptados</strong> às suas necessidades
            </h1>
            <Button />
          </section>
      <img src={deviceMobile} alt="" />
        </div>
      </Header>
    </Container>
  );
}
