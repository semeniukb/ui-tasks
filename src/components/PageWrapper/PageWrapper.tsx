import Link from "next/link";
import { ReactNode } from "react";
import styles from "./PageWrapper.module.css";

type Props = {
  title?: string;
  children: ReactNode;
};

export default function PageWrapper({ title, children }: Props) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
        {title && <h1 className={styles.header}>{title}</h1>}
        {children}
      </main>
    </div>
  );
}
