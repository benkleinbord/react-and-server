/**
 * Created by ben.kl on 4/7/2017.
 */

import React,{propTypes} from 'react';
const CatList = ({cats}) =>{
  return (
    <ul className="list-group">
      {cats.map(cat =>
      <li className="list-group-item" key={cat.id}>
        {cat.name}
      </li>
      )}
    </ul>
  );
};

CatList.propTypes = {
  cats: PropTypes.array.isRequired
};

export default CatList;
