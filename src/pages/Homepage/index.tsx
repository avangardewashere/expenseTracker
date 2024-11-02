import clsx from "clsx";
import { memo } from "react";
import style from "./index.module.scss";
const Homepage = memo(() => {
  return (
    <div>
      <span>
        <div className={clsx(style.container)}>Home</div>
      </span>
    </div>
  );
});

export default Homepage;
