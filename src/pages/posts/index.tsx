import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Titulo do post</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ea ipsa placeat officia alias repellat quos et, nostrum
              laborum fugit nisi! Voluptas, totam. Eum ea corporis dignissimos,
              explicabo dolorem at!
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Titulo do post</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ea ipsa placeat officia alias repellat quos et, nostrum
              laborum fugit nisi! Voluptas, totam. Eum ea corporis dignissimos,
              explicabo dolorem at!
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Titulo do post</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ea ipsa placeat officia alias repellat quos et, nostrum
              laborum fugit nisi! Voluptas, totam. Eum ea corporis dignissimos,
              explicabo dolorem at!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
