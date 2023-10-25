export default function Header(props) {
  return (
    <header>
      <h1 className="header text-center">Monica Cordova</h1>
      {props.children}
    </header>
  );
}
