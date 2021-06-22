import React from 'react';

const List = ({ collection = [] }) => {
  return collection.map((curr, idx) => <div key={idx}>{curr.text}</div>);
};

export default List;
