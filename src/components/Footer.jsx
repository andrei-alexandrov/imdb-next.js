import Link from "next/link";
import github from "../../public/github.png";
import Image from "next/image";
import linkedIn from "../../public/linkedin.png";

export default function Footer() {
  return (
    <div className="flex flex-col items-center dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg">
      <div className="mb-2">Created by Andrei Alexandrov</div>
      <div className="flex gap-2">
        <Link href="https://github.com/andrei-alexandrov" target="blank_">
          <div>
            <div className="transform transition duration-500 ease-out hover:scale-110">
              <Image src={github} alt="Github image" width={30} height={30} />
            </div>
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/andrei-alexandrov/"
          target="blank_"
        >
          <div>
            <div className="transform transition duration-500 ease-in-out hover:scale-110">
              <Image
                src={linkedIn}
                alt="LinkedIn image"
                width={30}
                height={30}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
