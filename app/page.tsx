import Link from "next/link";

export default function Home() {
  return (
      <main>
        <h1 className="btn btn-primary rounded text-white">
            <Link href="/users">Press here</Link>
        </h1>
      </main>
    );
}
