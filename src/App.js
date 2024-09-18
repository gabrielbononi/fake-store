import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import ProductCard from './components/ProductCard';
import Filter from './components/Filter';

const App = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <h1>Fake Store</h1>
      <Filter />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.filteredProducts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
