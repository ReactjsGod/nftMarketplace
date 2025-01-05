import React from 'react'
import style from './Tile.module.css'

interface TitleProp{
    head: string;
    p: string;
}

const Title = ({head, p}:TitleProp) => {
  return (
    <div className={style.title}>
        <div className={style.title_box}>
            <h2>{head}</h2>
            <p>{p}</p>
        </div>
    </div>
  )
}

export default Title