import {memo}from 'react'
import style from "./index.module.scss"
import clsx from 'clsx'
const InputCustom = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <span>InputCustom</span>
    </div>
  )
})

export default InputCustom
