import React, { FC, useState } from "react";
import "./BoxItemLarge.scss";
import { IBoxes } from "../../../types/types";

const BoxItemLarge: FC<IBoxes> = ({ isNotEmpty, image, index, isEmptyBox }) => {
  const [item_large, setItemLarge] = useState<string>(
    `itemL item_large${index}`
  );
  const isEmpty = () => {
    isEmptyBox(isNotEmpty, item_large, setItemLarge);
  };
  const removeFocus = () => {
    setItemLarge(`itemL item_large${index}`);
  };
  return (
    <div
      className={item_large}
      tabIndex={0}
      onFocus={isEmpty}
      onBlur={removeFocus}
    >
      <div className="imageL">
        <img src={image.image} alt="" />
      </div>
      <div className="size">
        <span className="size_val">{image.size}</span>
        <span className="size_num">{image.box}</span>
      </div>
    </div>
  );
};

export default BoxItemLarge;
