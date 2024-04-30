import { Header, Services } from "./styles";

import { Button } from "../../components/Button";
import { Service } from "../../components/Service";

import logoLight from "../../assets/images/logo-light.svg";
import deviceMobile from "../../assets/images/mobile.png";

export function Home() {
  return (
    <main>
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
    </main>
  );
}
