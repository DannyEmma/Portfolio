import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="mt-15 border-t border-[#a9adb233] py-6">
      <Link className="flex gap-2" href={"mailto:emmadanny@live.fr"}>
        <Image src="/icons/mail.svg" height={20} width={20} alt="Mail icon" />
        emmadanny@live.fr
      </Link>
    </footer>
  )
}
