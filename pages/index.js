export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 导航栏 */}
      <header className="flex justify-between items-center p-6 bg-black border-b border-pink-600">
        <h1 className="text-3xl font-bold text-pink-500">Requaro</h1>
        <nav className="space-x-6">
          <a href="#" className="text-white hover:text-pink-400">Home</a>
          <a href="#" className="text-white hover:text-pink-400">Explore</a>
          <a href="#" className="text-white hover:text-pink-400">Contact</a>
        </nav>
      </header>

      {/* 主内容区 */}
      <main className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h2 className="text-5xl font-bold mb-6 text-pink-500">Welcome to Requaro</h2>
        <p className="text-lg text-gray-300 mb-10 max-w-xl">Your intelligent product discovery and monetization system.</p>
        <a
          href="#"
          className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 text-lg rounded-full shadow-xl tracking-wide"
        >
          Start Exploring
        </a>
      </main>

      {/* 页脚 */}
      <footer className="text-center py-6 border-t border-pink-600 text-gray-500 text-sm">
        © 2025 Requaro. All rights reserved.
      </footer>
    </div>
  );
}
