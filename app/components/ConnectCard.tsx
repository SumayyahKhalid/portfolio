import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const links = [
    {
        label: "Linkedin",
        url: "https://www.linkedin.com/in/sumayyahkhalid/",
        Icon: FaLinkedin,
    },
    {
        label: "Email",
        url: "mailto:sumayyah.khaled@gmail.com",
        Icon: Mail,
    },
    {
        label: "Github",
        url: "https://github.com/SumayyahKhalid",
        Icon: FaGithub,
    },
]

export default function ConnectCard() {
    return (
        <div className="relative">
            <Image
                src="/blackspikey.svg"
                alt=""
                width={416}
                height={488}
                className="absolute left-[50%] top-[-35px] z-20 hidden h-auto w-[10%] animate-patrol-card md:block"
            />

            <div
                className="relative z-10"
                style={{
                    background: "#f8f3cf",
                    border: "1px solid #000000",
                    borderRadius: 10,
                    overflow: "hidden",
                }}
            >
                <div
                    className="px-5 py-3"
                    style={{ borderBottom: "1px solid #000000" }}
                >
                    <p
                        className="text-[16px] font-bold"
                        style={{
                            fontFamily: "var(--font-inconsolata)",
                            color: "#000000",
                        }}
                    >
                        Connect with me!
                    </p>
                </div>

                <div className="flex flex-col gap-6 px-6 py-6">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.url}
                            target={
                                link.label === "Email"
                                    ? undefined
                                    : "_blank"
                            }
                            rel={
                                link.label === "Email"
                                    ? undefined
                                    : "noreferrer"
                            }
                            className="flex items-center gap-3 transition-transform duration-300 ease-out hover:scale-105"
                            style={{ color: "#000000" }}
                        >
                            <link.Icon size={26} />

                            <span
                                className="text-[20px] font-bold"
                                style={{
                                    fontFamily: "var(--font-inconsolata)",
                                }}
                            >
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}