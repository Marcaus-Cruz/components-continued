import Input from "./components/Input";
import "./index.css";

function App() {
  return (
    <main>
      <Input id="name" label="Your name:" />
      <Input id="age" label="Your age:" />
    </main>
  );
}

export default App;
