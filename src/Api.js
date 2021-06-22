import React from 'react';

const Api = async ({ url = '' }) => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error('Error retrieving response', e);
    return e;
  }
};

export default Api;
