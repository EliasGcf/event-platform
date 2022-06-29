import { List, X } from "phosphor-react";
import { useSidebar } from "../store/sidebar-store";
import { Logo } from "./Logo";

export function Header() {
  const toggleSidebar = useSidebar(state => state.toggle);
  const showSidebar = useSidebar(state => state.show);

  return (
    <header className="relative w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />

      <button type="button" onClick={toggleSidebar} className="flex items-center gap-2 absolute right-6 xl:hidden">
        <span className="text-sm text-gray-100">Aulas</span>
        { showSidebar ? (
          <X className="text-blue-500" size={32} />
        ) : (
          <List className="text-blue-500" size={32} />
        )}
      </button>
    </header>
  );
}
