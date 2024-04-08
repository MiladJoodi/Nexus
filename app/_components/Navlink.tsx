"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavlinkProps = {
    title: string,
    url: string
}

const Navlink = ({item}:{ item: NavlinkProps }) => {

    const pathname = usePathname();
    // console.log(pathname)

    return (
        <Link href={item.url} className={`p-4 ${pathname === item.url && 'active'}`}>{item.title}</Link>
    );
}

export default Navlink;