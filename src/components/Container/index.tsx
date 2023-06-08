import classNames from "classnames";

type propsContainer = {
  children: React.ReactNode;
  className?: string;
};
export const Container = ({ children, className }: propsContainer) => {
  return (
    <div className={classNames(" w-full px-7 relative lg:px-32", className)}>
      {children}
    </div>
  );
};
