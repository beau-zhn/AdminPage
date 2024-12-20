// import { deleteUser } from "@/app/lib/actions";
// import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
const UsersPage = () => {
    return (
      <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Location</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {/* {users.map((user) => ( */}
            <tr>
            {/* key={user.id} */}
              <td>4344554</td>
              <td>
                <div className={styles.user}>
                  <Image
                    src={"/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {/* {user.username} */}
                  Alexander Em
                </div>
              </td>
              {/* <td> {user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td> */}
              
              <td>Astana, Kabanbay Batyr 53</td>
              <td>20.11.2024</td>
              <td>
                <div className={styles.buttons}>
                  {/* <Link href={`/dashboard/users/${user.id}`}> */}
                  <Link href={"/dashboard/users/test"}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  {/* <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form> */}
                </div>
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;