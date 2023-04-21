import React from "react";
import { s } from "./style";

interface Props {
  img: string;
  refModale: React.RefObject<HTMLInputElement>;
  form?: string;
}

const Modale = (props: Props) => {
  const { img, refModale, form = "rv" } = props;

  let dimension = { width: 0, height: 0 };
  if (form === "rv") dimension = { width: 320, height: 400 };
  if (form === "rvl") dimension = { width: 320, height: 470 };
  if (form === "rh") dimension = { width: 400, height: 320 };
  if (form === "s") dimension = { width: 400, height: 400 };

  return (
    <s.Modale ref={refModale}>
      <img src={img} alt={"meme"} {...dimension} />
    </s.Modale>
  );
};

export default Modale;
