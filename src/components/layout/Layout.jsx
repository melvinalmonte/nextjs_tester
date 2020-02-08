import Header from '../header';

export const Layout = (props) => (
  <div>
    <Header />
    <div className="container">
      {props.children}
    </div>
  </div>
);
