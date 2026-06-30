import Image from "next/image";
import Hero from "@/components/Hero";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between font-sans">
        
        {/* Шапка сайта (Header) */}
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
          
          {/* Логотип */}
          <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center overflow-hidden shrink-0 shadow-lg shadow-blue-500/20">
            <Image
              src="/logo.png"
              alt="New World Cadastre Logo"
              width={200}
              height={200}
              className="object-cover w-full h-full scale-[1.45]"
              priority
            />
          </div>
          
          <nav>
            <ul className="flex gap-6">
              <li>Главная</li>
              <li>Услуги</li>
              <li>Контакты</li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-grow flex-col">
          <Hero />
        </main>

      </div>
    </>
  );
}