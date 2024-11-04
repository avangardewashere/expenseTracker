import {memo}from 'react'
import style from "./index.module.scss"
import clsx from 'clsx'
const Button = memo(() => {
  return (
    <div className={clsx(style.container)}>
      <span>Button</span>
    </div>
  )
})

export default Button
