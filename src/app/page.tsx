import Link from "next/link";
import styles from "./page.module.css";

const components = [
  {
    name: "Accordion",
    path: "/tasks/accordion",
    description: "Expandable/collapsible content sections",
  },
  {
    name: "Progress Bar",
    path: "/tasks/progressbar",
    description: "Visual progress indicator",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>UI Components Practice</h1>
          <p>
            A collection of React UI components built with TypeScript and tested
            with Jest. Click on a component to see it in action.
          </p>
        </div>

        <div className={styles.grid}>
          {components.map((component) => (
            <Link
              key={component.path}
              href={component.path}
              className={styles.card}
            >
              <h2>{component.name}</h2>
              <p>{component.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
