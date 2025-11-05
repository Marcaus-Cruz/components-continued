import InputWrapper from "./components/InputWrapper";
import "./index.css";

function App() {
  return (
    <main>
      <InputWrapper id="name" label="Your name:" />
      <InputWrapper id="age" label="Your age:" />
    </main>
  );
}

export default App;
