import { FiX } from "react-icons/fi";
import { cn } from "../utils/cn";

export default function MobileDrawer({ open, onClose, items, active }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose} // Clicking outside closes drawer
      />

      {/* Drawer panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-64 bg-white dark:bg-neutral-900 shadow-lg transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-black/5 dark:border-white/10">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={onClose} className="p-2 rounded focus-ring" aria-label="Close menu">
            <FiX size={20} />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          {items.map((s) => (
            <a
              key={s.id}
              href={s.href}
              onClick={onClose}
              className={cn(
                "px-2 py-1 rounded focus-ring transition-colors",
                active === s.id
                  ? "text-accent font-semibold bg-accent/10"
                  : "opacity-80 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/5"
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
