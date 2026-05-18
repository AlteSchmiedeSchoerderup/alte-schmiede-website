export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <section
        className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 border border-yellow-500 rounded-full text-yellow-400 text-sm tracking-widest uppercase mb-6">
            Alte Schmiede Schörderup
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
            Schaufel- & Hardox
            <span className="block text-yellow-500">Instandsetzung</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-zinc-300 leading-relaxed mb-10">
            Professionelle Reparatur von Trecker-, Hoflader- und Radlader-
            Schaufeln für Landwirtschaft, Bau und Lohnunternehmen.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+49123456789"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-2xl text-lg transition"
            >
              Jetzt anrufen
            </a>

            <a
              href="https://wa.me/49123456789"
              className="border border-zinc-600 hover:border-yellow-500 px-8 py-4 rounded-2xl text-lg transition"
            >
              Schaden per WhatsApp schicken
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
              Unsere Leistungen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Bodenaustausch",
                text: "Kompletter Austausch verschlissener Böden.",
              },
              {
                title: "Hardox 500",
                text: "Extrem widerstandsfähige Verschleißbleche.",
              },
              {
                title: "Aufnahmen",
                text: "Reparatur und Verstärkung von Aufnahmen.",
              },
              {
                title: "Wochenend-Service",
                text: "Freitag holen – Montag zurück.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-zinc-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm px-6">
        © 2026 Alte Schmiede Schörderup
      </footer>
    </div>
  );
}
