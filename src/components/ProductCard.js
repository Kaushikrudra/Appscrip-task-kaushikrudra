import styles from '../styles/Home.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.title}
        className={styles.image}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
}
