"use client"
import styles from "./PostCard.module.css"
import { LuHeart, LuMessageCircle, LuSend, LuBookmark } from "react-icons/lu";
function PostCard({postContent}:any){
    return(
        <div className={styles.postCardContainer}>
            <div className={styles.postCard}>
                <p>{postContent}</p>
                <div className={styles.postCTA}>
                    <div className={styles.postClickAbles}>
                        <div className={styles.likeBtn}><LuHeart size={20}/></div>
                        <div className={styles.cmntBtn}><LuMessageCircle size={20}/></div>
                        <div className={styles.shareBtn}><LuSend size={20}/></div>
                    </div>
                    <div className={styles.saveButton}><LuBookmark size={20}/></div>
                </div>
            </div>
        </div>
    )
}

export default PostCard;