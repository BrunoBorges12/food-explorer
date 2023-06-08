import classNames from "classnames";

type propsContainer = {
  children: React.ReactNode;
  className?: string;
};
export const Container = ({ children, className }: propsContainer) => {
  return (
    <div className={classNames("container w-full px-4 lg:px-32", className)}>
      <div>{children}</div>
    </div>
  );
};
