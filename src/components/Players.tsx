import { useState } from "react"

type Player = {
  id: string
  name: string
  game: "Rainbow Six Siege" | "League of Legends" | "Rocket League" | "CS2" | "Apex Legends" | "Fighting Games" | "Teamfight Tactics" | "Valorant"
  grid: string      // image miniature 245px
  banner: string      // image grand format 800-1200 px
  bio: string
}

const mockPlayers: Player[] = [
    // note : team doesn't eaquals a full team, 
    // you can reference players you have even if you don't have a full team it'll help find new ones.
    //IMPORTANT : make sure each ID differs from each other

    // Rainbow Six Siege :

    { id: "r6_1", name: "NikBii", game: "Rainbow Six Siege", grid: "public/assets/players/Players_grid/Player_Grid_NikBii.png", banner: "public/assets/players/Players_banner/Player_Banner_r6.png",
      bio: "Manager de l'équipe R6." },


    //teamfight tactics : 
    { id: "t1", name: "Chop'", game: "Teamfight Tactics", grid: "public/assets/players/Players_grid/chop_grid.jpg", banner: "public/assets/players/Players_banner/Player_Banner_TFT.png", 
      bio: "Gagnant de tout en fait." },
    
    // Valorant :
    { id: "v1_1", name: "Stoat",  game: "Valorant", grid: "public/assets/players/Players_grid/Player_Grid_Stoat.png", banner: "public/assets/players/Players_banner/ValorantTeam1/Player_Banner_stoat.png",
      bio: "Stoat fait partie de l'équipe principale." },

    { id: "v1_2", name: "Elusive",  game: "Valorant", grid: "public/assets/players/Players_grid/Player_Grid_Elusive.png", banner: "public/assets/players/Players_banner/ValorantTeam1/Player_Banner_Elusive.png",
      bio: "Elusive fait partie de l'équipe principale" },

    { id: "v1_3", name: "Anku",  game: "Valorant", grid: "public/assets/players/Players_grid/Player_Grid_Anku.png", banner: "public/assets/players/Players_banner/ValorantTeam1/Player_Banner_Anku.png",
      bio: "Anku fait partie de l'équipe principale" },

    { id: "v1_4", name: "Kettada",  game: "Valorant", grid: "public/assets/players/Players_grid/Player_Grid_Kettada.png", banner: "public/assets/players/Players_banner/ValorantTeam1/Player_Banner_Kettada.png",
      bio: "Kettada fait partie de l'équipe principale" },

    // LoL : 
    { id: "l1", name: "Manager - ",  game: "League of Legends", grid: "public/assets/players/lux.jpg", banner: "public/assets/players/Players_banner/Player_Banner_LOL.png",
      bio: "Je suis la meilleure support du monde." },

    //Rocket League : 
    { id: "r1", name: "JoueurRL", game: "Rocket League", grid: "", banner: "public/assets/players/Players_banner/Player_Banner_RocketLeague.png",
      bio: "Je suis le meilleur joueur de Rocket League au monde." },

    //Counter Strike : 
    { id: "c1", name: "JoeurCS", game: "CS2", grid: "", banner: "public/assets/players/Players_banner/Player_Banner_CS2.png",
      bio: "Je suis le meilleur joueur de CS2 au monde." },

    //Fighting games :
    { id: "f2", name: "DigitalCakeBell", game: "Fighting Games", grid: "/assets/players/chun-li.png", banner: "public/assets/players/Players_banner/Player_Banner_Fighting.png",
      bio: "Je suis le meilleur joueur de Fighting Games au monde." },
    ]

/* ------------------------------------------------------------------ */
/* main component                                              */
/* ------------------------------------------------------------------ */
export default function Players() {
  const [filter, setFilter]         = useState<null | Player["game"]>(null)
  const [selected, setSelected]     = useState<Player | null>(null)

  const games = Array.from(new Set(mockPlayers.map(p => p.game)))
  const list  = filter ? mockPlayers.filter(p => p.game === filter) : mockPlayers


/* ---------------------------------------------------------------- */
/* Layout:                                                   */
/* ---------------------------------------------------------------- */
return (
  <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-8">
    {/* -------- player list - left ----------------------- */}
    <section className="lg:basis-1/2">
      {/* Filters */}
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

      {/* grid players */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {list.map(p => (
          <button
            key={p.id}
            onClick={() => setSelected(p)}
            className="relative group rounded-xl overflow-hidden
                        focus:outline-none focus:ring-2 focus:ring-rouge"
          >
            <img
              src={p.grid}
              alt={p.name}
              className="
                w-full 
                h-40 
                object-cover 
                transition-transform 
                scale-125
                group-hover:scale-150
                group-hover:blur-xs"
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

    {/* -------- Right panel ------------------------ */}
    <aside className="lg:basis-1/2 lg:sticky lg:top-24">
      {selected ? (
        <article
          key={selected.id}
          className="animate-fade-in space-y-4 lg:space-y-6"
        >
          <img
            src={selected.banner}
            alt={selected.name}
            className="w-full h-64 md:h-70 object-cover rounded-xl shadow-lg"
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