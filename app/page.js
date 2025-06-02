import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="banner home-banner">
        <div className="bg">
          <Image width="1280" height="700" alt="Banner Image"></Image>
        </div>
      </div>
    </main>
  );
}
