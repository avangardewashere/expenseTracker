import { memo } from "react";
import style from "./index.module.scss";
import clsx from "clsx";
import logoImg from "./../../../assets/img/common/logo.png";
interface LogoProps {
  direction?: "column" | "row";
  showName?:boolean;
  size?:number
  cHeight?:number;
}

const Logo: React.FC<LogoProps> = memo(({showName=true, direction = "row",cHeight,size }) => {
 
  return (
    <div className={clsx(style.container,direction === "column" && style.direction,  )} style={{height:cHeight ? `${cHeight}rem` :"100%"}}>
      <img src={logoImg} style={{width:size? `${size}rem`:""}} alt="expense-logo-img" />
      {showName && <span>Expense Tracker</span>}
    </div>
  );
});

export default Logo;
