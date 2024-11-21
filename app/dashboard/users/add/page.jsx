// // import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
const AddUserPage = () => {
  return (
    <div className={styles.container}>


      <div className={styles.formheader}>
        <div className={styles.uploadphoto}>
          <div className={styles.photoicon}>
            <img
              src={"/public.png"}
              alt="Upload Icon"
              className={styles.placeholdericon}
            />
          </div>
          <span className={styles.uploadtext}>Upload Photo</span>
        
        </div>
        
    </div>
     

      <form action="" className={styles.form}>
      <input type="text" placeholder="Enter the ID" name="ID" required />
        <input type="text" placeholder="Enter the Address" name="username" required />
        <input type="email" placeholder="Enter the email" name="email" required />
        <input
          type="password"
          placeholder="Enter the password"
          name="password"
          required
        />
        <input type="phone" placeholder="Enter the phone" name="phone" />
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Enter any aditional info"
        ></textarea>
        
      </form>
      
      <div className={styles.uploadphoto}>
      <button className={styles.submitbutton} type="submit">
  Add Now
</button>
    
    </div>
    </div>
  )
}

export default AddUserPage;

