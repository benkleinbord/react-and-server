/**
 * Created by ben.kl on 4/7/2017.
 */


import React,{propTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () =>{
  return(
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/cats" activeClassName="active">Cats</Link>
    </nav>
  );
};

export default Header;

