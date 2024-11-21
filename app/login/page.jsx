import styles from "@/app/ui/login/login.module.css";
// import LoginForm from "../ui/login/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      {/* <LoginForm/> */}
      <form action="" className={styles.form}>
      <h1 className={styles.heading}>Login to Account</h1>
      <h3 className={styles.subtitle}>
  Please enter your email and password to continue
</h3>
Email address:
      <input type="text" placeholder="adminiatrator@gmail.com" name="username" />
      Password:
      <input type="password" placeholder="••••••••" name="password" />
      
      <div className={styles.checkbox}>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember Password</label>
      </div>
     
      <button type="submit">Sign In</button>
      {/* {state && state} */}
    </form>
   

    </div>
  );
};

export default LoginPage;