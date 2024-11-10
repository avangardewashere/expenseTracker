import { memo } from "react";
import style from "./index.module.scss";
import clsx from "clsx";
import Logo from "../../components/common/logo";
import { Form, Input } from "antd-mobile";
import personImg from "./../../assets/img/icons/personIcon.png";
const AuthenticationPage = () => {
  return (
    <div className={clsx(style.container)}>
      <Logo direction="column" size={64}></Logo>

      <Form layout="horizontal">
        <div className={clsx(style.inputContainer)}>
         
          <img src={personImg} alt="person-icon-auth" />
          <Form.Item
            name="usernmae"
            rules={[{ required: true, message: "username is Required" }]}
          >
            <Input
              onChange={console.log}
              placeholder="Enter your chosen username"
              className={clsx(style.inputStyle)}
              style={{background:"transparent", }}
            />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AuthenticationPage;
