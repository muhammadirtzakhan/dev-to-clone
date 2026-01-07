import { userPosts } from "@/app/Data/userPost";
import { NextResponse } from "next/server";
export async function GET(){
    return NextResponse.json(userPosts)
}
export async function POST(request: Request){
    const data = await request.json();
    const newPost={
        postId:userPosts.length+1,
        postContent:data
    }
    userPosts.push(newPost)
    return NextResponse.json({ message: "Post created", post: newPost }, { status: 201 });
}