type HeaderProps = {
  userName: string;
};

export default function Header({ userName }: HeaderProps) {
  const initials = userName
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <div
      className="flex justify-center fixed w-full shadow-xl z-10"
      style={{ backgroundColor: "#F2EAEA" }}
    >
      <div className="p-2 w-[90%] grid grid-cols-[0.2fr_1.5fr_0.2fr] items-center gap-5">
        {/* Cercle avec les initiales */}
        <div className="flex justify-center items-center">
          <div
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-black font-bold text-dynamic-2xl rounded-full"
            style={{
              backgroundColor: "#F87777",
              fontFamily: "Island Moments, cursive",
            }}
          >
            {initials}
          </div>
        </div>

        {/* Nom d'utilisateur */}
        <div className="flex">
          <h1
            className="text-dynamic-4xl font-bold text-center"
            style={{ fontFamily: "Island Moments, cursive" }}
          >
            {userName}
          </h1>
        </div>

        {/* Image de profil */}
        <div className="flex justify-center items-center min-w-[48px] flex-shrink-0">
          <img
            src="/Lamintsoa.jpg" // Remplace par la vraie URL de la photo
            alt="Profil"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 object-cover aspect-square"
          />
        </div>
      </div>
    </div>
  );
}
