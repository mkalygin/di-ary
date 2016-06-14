import { Component } from 'react';
import { Link } from 'react-router';

export default ({to, onClick, children}) => (
  <Link className="header-btn" to={to} onClick={onClick}>{children}</Link>,
);
