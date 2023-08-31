import styles from "../../components/layout.module.css";
import Head from "next/head";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";



export default function BarcaLayout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image
          priority
          src="/images/ghassanyounis.jpg"
          className={utilStyles.borderCircle}
          height={100}
          width={100}
          alt=""
        />
        <a className={utilStyles.heading2Xl}>{"Ghassan Younis Ahmed"}</a>
      </header>
      <main>{children}</main>
    </div>
  );
}
