import Image from "next/image";

export const Logo = () => {
    return (
      <div className="w-28 h-10 overflow-hidden flex place-content-center items-center">
        <Image
          width={112}
          height={320}
          src="/mck_logo.png"
          alt="MCK Travel Agency logo"
          className="object-cover object-center"
        />
      </div>
    );
}
