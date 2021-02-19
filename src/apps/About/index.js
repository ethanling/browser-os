import Window from "../../components/Window";

export default function About() {
  return (
    <Window title="About" dark={false} titleBarShown={true}>
      <h1>About</h1>
      <p>This is information about BrowserOS</p>
    </Window>
  );
}
