/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'; // Import React and useState
import { useProducts } from '../../contexts/ProductsContext';
import './Kids.scss';
import { PuffLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { Heart } from '../../components/Heart/Heart';

export const Kids = () => {
  const { kidsProducts, filteredKidsData } = useProducts();
  const [hoveredProductId, setHoveredProductId] = useState(0); // Initialize with a default value

  return (
    <>
      <div className='container products-wrapper'>
        {filteredKidsData.map((product) => (
          <div
            className="product-card"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(0)}
            key={product.id}
          >
            <div className='heart-icon-container'>
              <Link to={`/product-page/${product.id}`} className="product-link">
                {hoveredProductId === product.id ? (
                  <img src={product.itemImg} alt={product.name} />
                ) : (
                  <img src={product.img} alt={product.name} />
                )}
              </Link>
              <Heart product={product} style='heart-icon-products' />
            </div>

            <Link to={`/product-page/${product.id}`} className="product-link">
              <font>{product.name}</font>
            </Link>

            <font>{product.price}$</font>

            <font className="last-font">New Product</font>
          </div>
        ))}
      </div>
      <div className="loader">
        <PuffLoader color="#222222" size={50} />
      </div>
    </>
  );
};