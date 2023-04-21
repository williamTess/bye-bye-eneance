import React from "react";
import { s } from "./style";

interface Props {
  img: string;
  onChange: (meme: string) => void;
  onChangeDimension: (dimension: string) => void;
  form?: string;
  [key: string]: any;
}

export const Link: React.FC<Props> = (props: Props) => {
  const { img, children, onChange, onChangeDimension, form = "rv" } = props;
  return (
    <s.Link
      onClick={() => {
        onChange(img);
        onChangeDimension(form);
      }}
    >
      {children}
    </s.Link>
  );
};
