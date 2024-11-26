import style from "@/styles/Data.module.css"

interface CardType{
    imgUrl:string
    title:string
    act:string
}
export default function Card({
    imgUrl,
    title,
    act
  }: CardType) {
    return(
        <>
        <div className={style.songCardd}>
        <div className={style.cardimg}>
            <img src={imgUrl} alt=""className={style.cardimg}/>
        </div>
        <div><p className={style.title}>{title}</p></div>
        <div><p className={style.act}>{act}</p></div>
        </div>
        </>
    )
    
}