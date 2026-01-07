import styles from "./ImageList.module.css"
import Image from "next/image";
function ImageListItem({imageSrc , imageText}:any){
    return(
        <div className={styles.listItem}>
            <Image src={imageSrc} alt="404" width={30} height={30}/>
            <p>{imageText}</p>
        </div>
    )
}
export default ImageListItem;