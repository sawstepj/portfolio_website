import styles from "../styles/Home.module.css";

export default function SidebarRight() {
  return (
    <div className={styles.sidebarRight}>
      <ul className={styles.sidebarList}>
        <li>
          <a
            className={styles.sidebarRightLink}
            // inline style
            style={{
              // vertical text
              writingMode: "vertical-rl",
            }}
            href="mailto:sawyerstepj@gmail.com"
          >
            sawyerstepj@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}
