import {memo} from 'react'
import style from './index.module.scss'
import clsx from 'clsx'
import Logo from '../../components/common/logo'


const AuthenticationPage = () => {
  return (
  <div className={clsx(style.container)}>
    <Logo direction="column" size={48} ></Logo>
  </div>
  )
}

export default AuthenticationPage
