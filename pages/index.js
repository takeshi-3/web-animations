import Head from 'next/head';
import Layout from '../components/layout.js';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import styles from '../styles/home.module.scss';

export default function Home() {
    return (
        <Layout title="">
            <main>
                <Button variant="contained" color="primary" size="large" className={styles.btn}>
                    <Link href="/lazyload"><a>Lazyload</a></Link>
                </Button>
            </main>
        </Layout>
    );
}
