import { Component } from 'react';
import { Link } from 'react-router';

export default ({to, children}) => (
  <Link className="header-btn" to={to}>{children}</Link>,
);
