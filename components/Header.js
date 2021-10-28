import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Link href="/" passHref>
          <h2>
            <a className="text-xl font-semibold">Dev Blog</a>
          </h2>
        </Link>
      </div>
    </header>
  );
}
