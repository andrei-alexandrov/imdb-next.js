import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center mt-14">
      <Image src="loader.svg" alt="loading..." width={100} height={50} />
    </div>
  );
}
