import React from 'react';
import { connect } from 'react-redux';
import { setCategoryFilter } from '../actions/productActions';

const Filter = ({ setCategoryFilter }) => {
  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];

  const handleChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Filtro: </label>
      <select id="category" onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCategoryFilter: (category) => dispatch(setCategoryFilter(category)),
});

export default connect(null, mapDispatchToProps)(Filter);
