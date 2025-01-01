import Text from "@/components/atoms/Text";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-6 px-4 sm:px-8 md:px-12 lg:px-16">
      <Text
        variant="h1"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-off-white text-center"
      >
        Welcome to the User Management App
      </Text>
      <Text
        variant="p"
        className="text-base sm:text-lg text-gray-500 -mt-2 text-center"
      >
        Manage users effectively with our user management app.
      </Text>
      <Link
        href="/users"
        className="px-6 flex sm:text-lg items-center justify-center uppercase py-2 h-[40px] sm:h-[54px] rounded-[100px] bg-primary text-black font-semibold hover:scale-105 transition-all text-center"
      >
        Go to Users
      </Link>
    </main>
  );
}