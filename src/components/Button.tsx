import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

type ButtonOrAnchorProps = ButtonProps | AnchorProps;

export default function Button(props: ButtonOrAnchorProps) {
  if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
