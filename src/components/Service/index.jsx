import { Container } from "./styles";

export function Service({ title, text, icon }) {
  return (
    <Container>
      <span>{icon}</span>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </Container>
  );
}
