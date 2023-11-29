import Link from "next/link";
import { ReactNode } from "react";

type BannerProps = {
  title?: string | ReactNode;
  subTitle?: string | ReactNode;
  desc?: string | ReactNode;
};

const Banner = ({
  title = "Todo List App",
  subTitle = "Simple Todo App",
  desc = (
    <>
      Powered By
      <Link
        className="text-blue-700 pl-2 italic"
        href="https://todos.simpleapi.dev/api/api/documentation"
      >
        Simple Todo Api
      </Link>
    </>
  ),
}: BannerProps) => {
  return (
    <div className="flex flex-col gap-2 pt-10">
      <h2 className="font-bold text-5xl pb-2">{title}</h2>
      <p className="font-semibold text-xl text-gray-400">{subTitle}</p>
      <p className="font-semibold text-lg text-gray-400">{desc}</p>
    </div>
  );
};

export default Banner;
