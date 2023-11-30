import React, { ReactNode } from "react";

type SwitchProps = {
  children: JSX.Element[];
};

type CaseProps = {
  children: JSX.Element;
  condition: boolean;
};

type DefaultProps = {
  children: JSX.Element;
};

export const Switch = ({ children }: SwitchProps) => {
  let matchChild: ReactNode = null;
  let defaultCase: ReactNode = null;

  React.Children.forEach(children, (child: JSX.Element) => {
    if (!matchChild && child?.type === Case) {
      const { condition } = child?.props;

      if (!!condition) {
        matchChild = child;
      }
    } else if (!defaultCase && child?.type === Default) {
      defaultCase = child;
    }
  });

  return matchChild ?? defaultCase ?? null;
};

export const Case = ({ children }: CaseProps) => {
  return children;
};

export const Default = ({ children }: DefaultProps) => {
  return children;
};
