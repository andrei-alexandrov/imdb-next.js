import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link className="hover:text-amber-600" href={address}>
      <Icon className="text-2xl sm:hidden " />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
