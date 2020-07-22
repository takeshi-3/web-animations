/* ------------------------
    default page wrapper
--------------------------- */

import styles from './layout.module.scss';
import Head from 'next/head';
import Link from 'next/link';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f44336',
        },
        secondary: {
            main: '#00e5ff',
        },
    },
});

const Layout = ({children, title}) => {

    const pageTitle = title ?
        `Animation Samples | ${title}` :
        "Animation Samples";

    const isHome = title ? false : true;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ThemeProvider theme={theme}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{pageTitle}</h1>

                    {children}

                    <footer>
                        {isHome ? null :
                            <div className={styles.backhome}>
                                <Button variant="contained" size="large">
                                    <Link href="/"><a>Home</a></Link>
                                </Button>
                            </div>
                        }
                    </footer>
                </div>
            </ThemeProvider>
        </>
    );
};

export default Layout;