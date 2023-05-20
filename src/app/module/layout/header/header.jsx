import React, { useState } from "react";
import headerClasses from "./header.module.scss";
import { Dropdown, Space } from "antd";

function Header() {
  const [items, setItems] = useState([
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ]);

  return (
    <div className={headerClasses.headerContainer}>
      {/* ================= logo header =============== */}
      <div className={headerClasses.logo}>{/* <h3>Meet-App</h3> */}</div>
      {/* ================= sidebar =================== */}
      <div className={headerClasses.profile}>
        <ul>
          <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADM0lEQVR4nO2ZTUgVURTHfyqlBIF9YZTlIqFWbUIS+9AoaleLIIqCWmcWBlZGQYuQSIg2EVKQRRREkC1rZxC6iSKCvhZ9oBYVlWBKpE5cOA8Ot/dm5s279zUP/MHhPWbunPO/c7/OvQN+WA/cB4bF+oAmSoTjwBQQWDYJdJBymkRokMNMxTaSYvqU2AfAcrGH6vo9nwJWA0eB2oTPDyuhy9T1OnV9KKHvWtFmNGalCvghQb4ALXkGKLO6i/HxXf6PWPcq8vTdIv4C0VgVVQFjf4C2GM5nA+3A25C+b5tpqTPAnBj+20RLEFUBQ2OWt9Ud8WZe5iHctvfA9hD/3Vb5EdEYylJgUD00lqNce5YZ5xtwE9gpY2CudK06EXrLGieB2FkpZzOmygyKtlhUAj3ABNCV5f4FS4Bp1tawplWY/r8P+Gz5uAqUW2W7REOPaHJCmxW4H6hJ4KfamnYDGRdeabS6zZ0C30yFvHm90G1xqPefYE9UsMcxu0wU5bLoZfx+dNldNAesga0XqkJZZM1+h/DAgApw0oP/Vmu1nuXS+Srl3MwK83FPpQjPxImdCXRZK11mFdbT5xp17wb+uKjinI+rUS8WQcgCth84ByzwWIFtKr6ZMDKEaozTAsViodLwVV1Pk8ZQyoDfInBaEsWS45N6y4spQYZVBZa4cnoEeC2/JVmBcXFofkuuAuVWsuWbIRUvdv4fxjwr7/fNKxVvpQuHDcrhC/zTr+KZha1gOpRDsyX0zWUV77QLh3oPsBf/7FLxnrrMQsdlk+6bauCXimsOihNzXTm6S/HoUXHNbi0R9VYCtYHiscKKnagVepUDczhbbHoLaQWzgR9VDtZRfOpVK0zJ2Eg0eN8lOIx1lVoPKB3N+Txs8vCfOXZBrm3CShK3qlNtvXnJeyd4qkgVCIA3Ku7tLPcvkZCDcqg6+R9aYFoWss4cB7/OOKHEmPk7iiuq/DFSwFolaFRO2XJRY81uDaQAs194rkQ9yjHlVcu9TLlnvrtGPmy2xsmQdK1msU5rp2XKbiJlHJaBFzVop30d3rpghxyP5xL/IeKbWCow3wz2SC7TL3YN2O3oe8IMM+CQv3Pay/cZQq4LAAAAAElFTkSuQmCC" /></li>
          <li>sjstar</li>
          <li>  <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className={`${headerClasses.dropdownButton}`}>S</Space>
          </a>
        </Dropdown></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
