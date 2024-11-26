import style from "@/styles/Navbar.module.css"

export default function Navbar(){

    return(
        <>
        <nav className={style.nav}>
            <section className={style.btnn}>
                <a className={style.bt}>所有</a>
                <a className={style.btn}>藝人</a>
                <a className={style.btn}>播放清單</a>
                <a className={style.btn}>歌曲</a>
                <a className={style.btn}>專輯</a>
                <a className={style.btn}>個人檔案</a>
                <a className={style.btn}>Podcast 和節目</a>
            </section>
        </nav>
        </>
    )
}