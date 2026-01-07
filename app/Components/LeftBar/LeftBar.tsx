import styles from "./LeftBar.module.css"
import ImageListItem from "../ImageList/ImageListItem";
function LeftBar(){
    const listData=[
        {
            imgSrc:"/ant.webp",
            imgText:"Home"
        },
        {
            imgSrc:"/bacteriaicon.webp",
            imgText:"DEV++"
        },
        {
            imgSrc:"/cicon.webp",
            imgText:"Reading List"
        },
        {
            imgSrc:"/DevIcon.png",
            imgText:"Podcasts"
        },
        {
            imgSrc:"/dumbicon.webp",
            imgText:"Videos"
        },
        {
            imgSrc:"/exploding-head.svg",
            imgText:"Dev Education Tracks"
        },
        {
            imgSrc:"/fbaricon.webp",
            imgText:"Dev Challenges"
        },
        {
            imgSrc:"/ggicon.webp",
            imgText:"DEV Help"
        },
        {
            imgSrc:"/golficon.webp",
            imgText:"Advertise on Dev"
        },
        {
            imgSrc:"/idkwhaticon.webp",
            imgText:"Dev Showcase"
        },
        {
            imgSrc:"/letter-m-icon.webp",
            imgText:"About"
        },
        {
            imgSrc:"/penicon.webp",
            imgText:"Contact"
        },
        {
            imgSrc:"/planeticon.webp",
            imgText:"Forem Shop"
        },
        {
            imgSrc:"/unicorn.svg",
            imgText:"Code of Conduct"
        },
        {
            imgSrc:"/vibeicob.webp",
            imgText:"Privacy Policy"
        },
        {
            imgSrc:"/planeticon.webp",
            imgText:"Terms of Use"
        },
    
    ]
    return(
        <div className={styles.mainContainer}>
            {
                listData.map((item,index)=>{
                        {
                            if(index===12){
                                return <div key={index} className={styles.specificText}>Others</div>
                            }else{
                                return <ImageListItem key={index} imageSrc={item.imgSrc} imageText={item.imgText}/>
                            }
                        }
                    
                })
            }
        </div>
    )
}
export default LeftBar;