import { useState } from "react"

type Player = {
  id: string
  name: string
  game: "Valorant" | "League of Legends" | "Rocket League" | "CS2" | "Apex Legends" | "Fighting Games" | "Teamfight Tactics"
  avatar: string      // image miniature 245px
  banner: string      // image grand format 800-1200 px
  bio: string
}

const mockPlayers: Player[] = [
    // note : team doesn't eaquals a full team, 
    // you can reference players you have even if you don't have a full team it'll help find new ones.

    //teamfight tactics : 
    { id: "t1", name: "Chop", game: "Teamfight Tactics", avatar: "public/assets/players/chop.jpg", banner: "public/assets/players/chop.jpg", 
      bio: "Gagnant de tout en fait." },
    
    // Valorant :
    { id: "v1", name: "Ace",  game: "Valorant", avatar: "/assets/players/ace.png", banner: "/assets/players/ace.png",
      bio: "Je suis le meilleur joueur de Valorant au monde." },

    // LoL : 
    { id: "l1", name: "Lux",  game: "League of Legends", avatar: "public/assets/players/lux.jpg", banner: "public/assets/players/lux.jpg",
      bio: "Je suis la meilleure support du monde." },

    //Rocket League : 
    { id: "r1", name: "Octane", game: "Rocket League", avatar: "/assets/players/octane.png", banner: "/assets/players/octane.png",
      bio: "Je suis le meilleur joueur de Rocket League au monde." },

    //Counter Strike : 
    { id: "c1", name: "Niko", game: "CS2", avatar: "/assets/players/niko.png", banner: "/assets/players/niko.png",
      bio: "Je suis le meilleur joueur de CS2 au monde." },

    //Fighting games :
    { id: "f2", name: "DigitalCakeBell", game: "Fighting Games", avatar: "/assets/players/chun-li.png", banner: "/assets/players/chun-li.png",
      bio: "Je suis le meilleur joueur de Fighting Games au monde." },
    ]

/* ------------------------------------------------------------------ */
/* Composant principal                                             */
/* ------------------------------------------------------------------ */
export default function Players() {
  const [filter, setFilter]         = useState<null | Player["game"]>(null)
  const [selected, setSelected]     = useState<Player | null>(null)

  const games = Array.from(new Set(mockPlayers.map(p => p.game)))
  const list  = filter ? mockPlayers.filter(p => p.game === filter) : mockPlayers


/* ---------------------------------------------------------------- */
/* Mise en page :                                                   */
/* ---------------------------------------------------------------- */
return (
  <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-8">
    {/* -------- Liste des joueurs (gauche) ----------------------- */}
    <section className="lg:basis-1/2">
      {/* Filtres */}
      <header className="flex flex-wrap justify-center gap-3 mb-6">
        {games.map(g => (
          <button
            key={g}
            onClick={() => setFilter(f => (f === g ? null : g))}
            className={`px-4 py-1 rounded-full border text-sm md:text-base transition
                        ${filter === g
                          ? "bg-rouge text-white"
                          : "border-rouge text-rouge hover:bg-rouge/10"}`}
          >
            {g}
          </button>
        ))}
      </header>

      {/* Grille des vignettes */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {list.map(p => (
          <button
            key={p.id}
            onClick={() => setSelected(p)}
            className="relative group rounded-xl overflow-hidden
                        focus:outline-none focus:ring-2 focus:ring-rouge"
          >
            <img
              src={p.avatar}
              alt={p.name}
              className="w-full h-40 object-cover transition-transform
                          group-hover:scale-105"
            />
            <span
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                          flex items-center justify-center text-white text-xl font-semibold
                          transition"
            >
              {p.name}
            </span>
          </button>
        ))}
      </div>
    </section>

    {/* -------- Panneau de détail (droite) ------------------------ */}
    <aside className="lg:basis-1/2 lg:sticky lg:top-24">
      {selected ? (
        <article
          key={selected.id}
          className="animate-fade-in space-y-4 lg:space-y-6"
        >
          <img
            src={selected.banner}
            alt={selected.name}
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
          />
          <h2 className="text-5xl font-bold text-rouge">{selected.name}</h2>
          <h3 className="text-2xl font-medium text-blanc mb-2">
            {selected.game}
          </h3>
          <p className="text-blanc leading-relaxed">{selected.bio}</p>
        </article>
      ) : (
        <p className="text-center text-blanc mt-12">
          ← Sélectionne un joueur pour voir son profil
        </p>
      )}
    </aside>
  </div>
)
}