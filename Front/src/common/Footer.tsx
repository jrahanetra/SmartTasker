type HeaderProps = {
  userName: string;
};

export default function Footer({ userName }: HeaderProps) {
  const initials = userName
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <div
      className="flex justify-center w-full shadow-xl"
      style={{ backgroundColor: "#F2EAEA" }}
    >
      <div className="p-2 w-[90%] grid grid-cols-[0.2fr_1fr_0.2fr] md:grid-cols-[0.1fr_2fr_0.1fr] items-center gap-5">
        {/* Cercle avec les initiales */}
        <div className="flex justify-center items-center">
          <div
            className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-black font-black text-dynamic-2xl rounded-full"
            style={{
              backgroundColor: "#F87777",
              fontFamily: "Island Moments, cursive",
            }}
          >
            {initials}
          </div>
        </div>

        {/* Nom d'utilisateur */}
        <div className="flex items-center justify-center">
          <h1
            className="text-dynamic-4xl font-bold text-center"
            style={{ fontFamily: "Island Moments, cursive" }}
          >
            {userName}
          </h1>
        </div>
      </div>
    </div>
  );
}
