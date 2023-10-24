export default function Header(props) {
  return (
    <header>
      <h1 className="text-center">Monica Cordova</h1>
      {props.children}
    </header>
  );
}
