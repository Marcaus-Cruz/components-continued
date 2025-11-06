import Button from "./components/Button";
import Container from "./components/Container";
import InputWrapper from "./components/InputWrapper";
import "./index.css";

function App() {
  return (
    <main>
      <Container as={Button} el="button">
        Click me
      </Container>
      <InputWrapper id="name" label="Your name:" />
      <InputWrapper id="age" label="Your age:" type="number" />
      <p>
        <Button el="button">I am a Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com">
          I am an anchor
        </Button>
      </p>
    </main>
  );
}

export default App;
