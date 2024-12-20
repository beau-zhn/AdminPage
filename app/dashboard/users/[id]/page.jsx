import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
// import { updateUser } from "@/app/lib/actions";
// import { fetchUser } from "@/app/lib/data";
import Image from "next/image";

const SingleUserPage =  () => {
  
//   const { id } = params;
//   const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/public.png"} alt="" 
          width="300"
          height="300"/>
        </div>
        {/* {user.username} */}
        Nurlan
      </div>
      <div className={styles.formContainer}>
        <form action className={styles.form}>
          <input type="hidden" name="id" value="{user.id}"/>
          <label>Username</label>
          <input type="text" name="username" placeholder="{user.username}" />
          <label>Email</label>
          <input type="email" name="email" placeholder="{user.email} "/>
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="{user.phone}" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="{user.address}" />
        
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} >Yes</option>
            <option value={false}>No</option>
          </select>
          {/* <button>Update</button> */}
        </form>
              <div className={styles.uploadphoto}>
                  <button className={styles.button} type="submit">
                      Update
                  </button>

              </div>
      </div>
    </div>
  );
};

export default SingleUserPage;