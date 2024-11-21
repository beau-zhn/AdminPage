"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { RiNotification3Line,
  RiMessage2Line,
  RiSearchLine
} from "react-icons/ri";


const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <RiSearchLine />
          <input type="text" placeholder="Search" className={styles.input} />
        </div>
        <div className={styles.icons}>
          <RiMessage2Line size={20} />
          <RiNotification3Line size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
