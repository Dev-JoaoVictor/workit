import { Container } from "./styles";

export function Service({ title, text, icon }) {
  return (
    <Container>
      <span>{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Container>
  );
}
