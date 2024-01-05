import Link from "next/link";
// import Form from "./form/page";
import About from "./about/page";

export default function Home() {
  return (
    <main className="w-full py-20">
      <div className="container flex flex-col items-center">
        <h1 className="text-4xl">Todo</h1>
        <About />
      </div>
      <br />
    </main>
  );
}
