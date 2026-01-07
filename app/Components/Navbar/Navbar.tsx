import  styles  from "../Navbar/Navbar.module.css";
import devIcon from "../../../public/DevIcon.png"
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
function Navbar (){
    return(
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <div className={styles.iconSection}>
                    <Image src={devIcon} alt="" height={40} width={40}/>
                    <div className={styles.searchBar}>
                        <FiSearch strokeWidth={1.5} size={30} className="font-extralight"/>
                        <input type="text" placeholder="Search"/>
                    </div>
                </div>
                <div className={styles.buttonSection}>
                    <button className={styles.loginButton}>Log in</button>
                    <button className={styles.createAccButton}>Create Account</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar