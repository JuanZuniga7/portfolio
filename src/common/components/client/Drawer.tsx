"use client";

export const handleMenu = () => {
  const drawer = document.getElementById("drawer");
  drawer!.classList.toggle("-translate-x-full");
};

export default function Drawer({ children }: { children?: JSX.Element }) {
  return (
    <div
      id="drawer"
      onClick={() => handleMenu()}
      className="w-screen h-screen fixed top-0 z-50 left-0 bg-slate-100 bg-opacity-20 backdrop-blur-md 
            transition-all duration-500 -translate-x-full overflow-hidden flex items-center"
    >
      {children}
    </div>
  );
}
