import React, { Component } from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="container">
      <Link to="/databaselist">Load Database</Link>
    </div>
  );
}
