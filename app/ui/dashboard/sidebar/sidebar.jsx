import styles from "./sidebar.module.css";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import { RiDashboard3Line, 
  RiListCheck3,
  RiSettings5Line,
  RiLogoutCircleLine

 } from "react-icons/ri";

// import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "MAIN",
    list: [
      {
        title: "Farmer Requests",
        path: "/dashboard",
        icon: <RiDashboard3Line />,
      },
      {
        title: "Farmers List",
        path: "/dashboard/users",
        icon: <RiListCheck3 />,
      },
    ],
  },
  {
    title: "PAGES",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <RiSettings5Line />,
      },
    ],
  },
];

const Sidebar = async () => {
  //const { user } = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>

        <Image
          className={styles.userImage}
          // user.img || 
          src={"/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>
            {/* {user.username} */}
            Aruzhan Tolegen
            </span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <RiLogoutCircleLine />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;