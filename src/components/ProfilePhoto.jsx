export default function ProfilePhoto({ className = '' }) {
  return (
    <div
      className={`relative overflow-hidden shadow-lg bg-[#bde5e1] dark:bg-[#121212] mx-auto 
                  rounded-full sm:rounded-lg
                  ${className}`}
      aria-label="Profile photo"
    >
      <img
        src="/assets/profile-default.png"
        alt="Profile"
        className="w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
