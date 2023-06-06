import { ReactNode } from "react";

interface PropsMainLayout {
  children: ReactNode;
}
export default function MainLayout({ children }: PropsMainLayout) {
  return (
    <main className="bg-slate-50 p-6 sm:p-10 min-h-screen">{children}</main>
  );
}
