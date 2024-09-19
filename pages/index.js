import Head from "next/head";
import Layout, { siteTitle } from "../components/layout.js";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts.js";
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {

    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}



export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Ghassan Younis is a chemical engineer, a graduate of Tikrit University, Faculty of Engineering. I have a great passion to learn programming and become a full-fledged developer, I am currently training to use Next.js.
Next.js is a popular React framework that provides tools and features to build server-rendered React applications with ease.</p>
        <p>
           ... اهل الجرية ليش ما تركدون 
            😆 

        </p>

                
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                        <br />
                        <small className={utilStyles.lightText}>
                          <Date dateString={date} />
                        </small>
                      </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}
