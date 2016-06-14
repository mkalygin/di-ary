import { Component } from 'react';
import { Link } from 'react-router';

export default ({children = []}) => {
  const linkItems = children.map((link, i) => <li key={i}>{link}</li>);

  return (
    <div className="bs-component">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header app-logo">
            <Link className="pull-left" to="/">
              <img src="/images/logo.png" />
            </Link>
            <Link className="navbar-brand" to="/">quick math notes</Link>
          </div>

          <ul className="nav navbar-nav navbar-right">
            {linkItems}
          </ul>
        </div>
      </nav>
    </div>
  );
}
