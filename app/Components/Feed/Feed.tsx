"use client"
import { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";
import PostUpload from "../PostUpload/PostUpload";
import styles from "./Feed.module.css"
import { userPosts } from "@/app/Data/userPost";
function Feed(){
    interface Post {
        postId: number;
        postContent: string;
    }
    const [posts,setPosts]=useState<Post[]>([])
    const fetchPosts=async()=>{
        const resp = await fetch("/api/userPosts")
        const res = await resp.json()
        setPosts(res)
        console.log(res)
    }
    useEffect(()=>{
        fetchPosts()
    },[])
    return(
        <div className={styles.mainContainer}>
            <PostUpload onPostSuccess={fetchPosts} />
            {
                posts.map((item,indx)=>{
                    return <div key={indx}><PostCard postContent={item.postContent}/></div>
                })
            }
        </div>
    )
}
export default Feed;