import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
  full?: boolean;
}

export function SectionContainer({ id, children, className = "", full = false }: Props) {
  return (
    <section
      id={id}
      className={`${full ? "w-full" : "max-w-[1100px] mx-auto px-6"} py-24 ${className}`}
    >
      {children}
    </section>
  );
}
