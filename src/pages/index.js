import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ProductCard from '../components/ProductCard';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    return { props: { products } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { products: [] } };
  }
}

export default function Home({ products }) {
  if (!products || products.length === 0) {
    return <h2 style={{ textAlign: 'center', marginTop: '4rem' }}>No products found.</h2>;
  }

  return (
    <>
      <Head>
        <title>Shop Quality Products Online | Appscrip Task</title>
        <meta name="description" content="Responsive Product Listing Page built with Next.js and SSR" />
        <meta name="keywords" content="ecommerce, products, next.js, SSR" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Product Listing Page",
              "description": "Responsive product listing page built with Next.js and SSR",
              "url": "https://yourdomain.com"
            }),
          }}
        />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>All Products</h1>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}

