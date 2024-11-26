import style from "@/styles/Data.module.css"
import { FaPlay, FaStop  } from "react-icons/fa";
import React, { useState } from "react";
import { Song } from "./Song";
import Card from "./Card";

export default function Data(){
    const [state, setState] = useState<boolean>(true);
    const click = () => {
        setState(!state);
      };
    const name ='周杰倫'
    // const act = '擁有者:Spotify'

    return(
        <>
        <main className={style.main}>
            <section>
                <div><b className={style.b}>熱門搜尋結果</b></div>
                <div className={style.card}>
                    <img src="https://picsum.photos/500?random=1" alt="" className={style.img} /><br />
                    <b className={style.b}>{name}</b>
                    <p className={style.p}>藝人</p>
                    <button className={style.play} onClick={() => click()}>{state ? <FaPlay /> : <FaStop />}</button>
                </div>
            </section>
            <section>
                <div><b className={style.b}>歌曲</b></div>
                <div className={style.car}>
                    {Song.map((v,i)=>(
                        <div key={i} className={style.song}>
                            <img src={v.img} width={100} className={style.songimg}/>
                            <p className={style.p}>{v.songName} <br />{name}</p> 
                            <p className={style.time}>{v.times}</p>                           
                        </div>
                        
                    ))}
                </div>
            </section>
        </main>
        <main>
            <section>
                <div><b className={style.b}>演出者{name}</b></div>
                <div className={style.songCard}>
                    <Card imgUrl="https://picsum.photos/500?random=10" title="最愛...周杰倫" act="擁有者:Spotify"/>
                    <Card imgUrl="https://picsum.photos/500?random=11" title="最愛...周杰倫" act="擁有者:Spotify"/>
                    <Card imgUrl="https://picsum.photos/500?random=12" title="最愛...周杰倫" act="擁有者:Spotify"/>
                    <Card imgUrl="https://picsum.photos/500?random=13" title="最愛...周杰倫" act="擁有者:Spotify"/>
                </div>
            </section>
        </main>
        </>
    )
}