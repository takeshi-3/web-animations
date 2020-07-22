import Head from 'next/head';
import Layout from '../components/layout.js';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import LazyApper from '../components/lazyAppear.js';
import { useEffect, useState } from 'react';

import styles from '../styles/lazyload.module.scss';

export default function Home() {
    const sections = [...Array(3).keys()];
    const boxes = [...Array(6).keys()].map(box => 
        <div 
            className={styles.box}
            key={box}
        ></div>
    );

    return (
        <Layout title="lazyload">
            <main>
                {sections.map(section => 
                    <section key={section}>
                        <LazyApper><h2 className={styles.secTitle}>{`Section ${section} Title`}</h2></LazyApper>
                        <LazyApper>
                            <div className={styles.secWrap}>
                                {boxes}
                            </div>
                        </LazyApper>
                    </section>
                )}
            </main>
        </Layout>
    );
}
