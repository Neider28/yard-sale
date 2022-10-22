import { useState } from 'react';
import { ProductItem } from '@components/ProductItem.jsx';
import { useGetProducts } from '@hooks/useGetProducts.js';
import { Paginate } from '@components/Paginate.jsx';
import { endPoints } from '@services/api';
import styles from '@styles/ProductList.module.css';

const PRODUCT_LIMIT = 20;

const ProductList = () => {
	const [offsetProducts, setOffsetProducts] = useState(0);
	const products = useGetProducts(endPoints.products.getListProducts(PRODUCT_LIMIT, offsetProducts));
  const totalProducts = useGetProducts(endPoints.products.getListProducts(0, 0)).length;

	return (
		<section className={styles.ProductSection}>
			<div className={styles.ProductList}>
				{
					products.map(product => (
						<ProductItem product={product} key={product.id} />
					))
				}
			</div>
			{totalProducts > 0 && 
				<Paginate totalItems={totalProducts} itemsPerPage={PRODUCT_LIMIT} setOffset={setOffsetProducts} neighbours={3} />
			}
		</section>
	);
}

export { ProductList };