"use client"
import styles from "./PostUpload.module.css"
import { useState } from "react";
function PostUpload({onPostSuccess}){
    const [isExpanded,setIsExpanded]=useState(false)
    const [userInput,setUserInput]=useState("")
    const uploadUserData = async()=>{
        if(!userInput) return

        await fetch("/api/userPosts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userInput)
        })
        console.log("post uploaded")
        setUserInput("")
        setIsExpanded(false); // Manually collapse the box after successful post
        onPostSuccess()
    }
    return(
        <div className={styles.mainContainer}>
            <textarea onFocus={()=>setIsExpanded(true)}  onChange={(e)=>setUserInput(e.target.value)} value={userInput} className={styles.postInputField}  placeholder="What On Your Mind?"/>
            {
                isExpanded?(
                    <div className={styles.postBtnContainer}>
                        <p>Quckie Posts Show up in feed but not in your profile</p>
                        <button onClick={uploadUserData}>Post</button>
                    </div>
                ):(
                    <div></div>
                )
            }
        </div>
    )
}
export default PostUpload;