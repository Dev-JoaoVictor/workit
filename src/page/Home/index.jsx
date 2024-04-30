import { Footer, Header, Message, Services } from "./styles";

import { Button } from "../../components/Button";
import { Service } from "../../components/Service";

import logoDark from "../../assets/images/logo-dark.svg";
import logoLight from "../../assets/images/logo-light.svg";
import founder from "../../assets/images/image-founder.webp";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import deviceMobile from "../../assets/images/image-hero.webp";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";

export function Home() {
  return (
    <main>
      <Header>
        <div>
          <img src={logoLight} alt="Logo da empresa Workit" />
          <a href="#">Solicitar Acesso</a>
        </div>
        <section>
          <h1>
            Dados <strong>adaptados</strong> às suas necessidades
          </h1>
          <Button text="saber mais" />
        </section>
        <img src={deviceMobile} alt="imagem ilustrativa de um celular" />
      </Header>
      <Services>
        <Service
          icon={1}
          title="Insights acionáveis"
          text="Otimize seus produtos, melhore a satisfação do cliente e fique à frente da concorrência com nossa análise de dados de produtos."
        />
        <Service
          icon={2}
          title="Decisões baseadas em dados"
          text="Tome decisões baseadas em dados com nossa análise de dados de produtos. Nossos relatórios gerados por IA ajudam você a desbloquear insights ocultos nos dados do seu produto."
        />
        <Service
          icon={3}
          title="Sempre acessível"
          text="Preços sempre acessíveis que acompanham o seu negócio. Obtenha serviços de análise de dados de produtos de alta qualidade sem custos ocultos ou taxas inesperadas."
        />
      </Services>
      <Message>
        <img src={founder} alt="imagem do fundador da empresa" />
        <div>
          <h3>Seja o primeiro a testar</h3>
          <p>
            Olá, sou Louis Graham, o fundador da empresa. Agende uma chamada de
            demonstração comigo para se tornar um testador beta de nosso
            aplicativo e impulsionar sua empresa. Solicite acesso abaixo e
            entrarei em contato para agendar uma ligação.
          </p>
          <Button text="solicitar acesso" />
        </div>
      </Message>
      <Footer>
        <img src={logoDark} alt="Logo da empresa Workit" />
        <div>
          <img src={facebookIcon} alt="Logo do Facebook" />
          <img src={twitterIcon} alt="Logo do Twiitter" />
          <img src={instagramIcon} alt="Logo do Instagram" />
        </div>
      </Footer>
    </main>
  );
}
