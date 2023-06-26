import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  return (
    <>
      <div className="h-24 shadow">
        <div className="w-full max-w-7xl mx-auto h-full flex items-center justify-between">
            <div>
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
                width={100}
                height={100}
              />
            </div>
            <nav>
              <Link href="/login">
                Login
              </Link>
            </nav>
        </div>
      </div>
      <div className="py-10 w-full">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-3xl font-bold">Home</h2>
          <pre>
          </pre>

        </div>
      </div>
    </>
  )
}
