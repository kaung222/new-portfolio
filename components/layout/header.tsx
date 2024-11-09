import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 bg-slate-200">
      <Link className="flex items-center justify-center" href="/">
        {/* <MountainIcon className="h-6 w-6" /> */}
        <span className=" font-bold">JM</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#projects"
        >
          Projects
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#skills"
        >
          Skills
        </Link>

        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#blogs"
        >
          Blogs
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
