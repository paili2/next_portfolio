import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-amber-300 w-full py-7">
      <div className="w-full max-w-screen-xl flex justify-between items-center mx-auto">
        <h1 className="text-xl font-extrabold">JEONG SEORYEONG</h1>
        <nav>
          <ul className="flex gap-5 font-semibold">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/skils"}>Skils</Link>
            </li>
            <li>
              <Link href={"/credentials"}>Credentials</Link>
            </li>

            <li>
              <Link href={"/projects"}>Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
