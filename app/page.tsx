import { Text } from "@/components/atoms/Text";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-6">
        <Text variant="h1" className="text-4xl font-bold text-off-white">
          Welcome to the User Management App
        </Text>
        <Text variant="p" className="text-lg text-gray-600 -mt-2">
          Manage users effectively with our user management app.
        </Text>
        <Link href="/users" className="px-6 flex items-center justify-center uppercase py-2 h-[54px] rounded-[100px] bg-primary text-black font-semibold hover:scale-105 transition-all">
          Go to Users
        </Link>
    </main>
  );
}
