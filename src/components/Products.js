import React from 'react';

// Components
import Product from './Product';

// Import useContext and ProductContext
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext.js';

const Products = () => {

	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
