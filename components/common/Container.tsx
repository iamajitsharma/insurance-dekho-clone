import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("px-4 md:px-8 lg:px-12 h-full", className)}>
      {children}
    </div>
  );
};

export default Container;
