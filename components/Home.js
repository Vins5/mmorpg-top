import Image from 'next/image'

const servers = [
  {
    name: "Epic Fantasy",
    version: "v1.0",
    description: "Embark on an epic fantasy adventure. Massive world, unique classes, and engaging quests.",
    image: "https://images.unsplash.com/photo-1619983081563-430f6360276e?auto=format&fit=crop&w=400&q=80",
    votes: 0,
    sponsored: true
  },
  {
    name: "MythicalWorld",
    version: "2.5",
    description: "A mystical MMORPG with custom dungeons, epic raids, and powerful artifacts.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    votes: 8
  },
  {
    name: "DarkRealm",
    version: "3.2",
    description: "Immerse yourself in a dark, immersive realm. High rates, PvP, and PvE content.",
    image: "https://images.unsplash.com/photo-1590608897129-79da83dba8d7?auto=format&fit=crop&w=400&q=80",
    votes: 5
  },
  {
    name: "FantasyLand",
    version: "1.8",
    description: "Classic MMORPG gameplay with friendly community and frequent updates.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80",
    votes: 4
  }
]

export default function Home() {
  const featured = servers.find((s) => s.sponsored)
  const others = servers.filter((s) => !s.sponsored)

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-2xl font-bold">MMO RPG TOP</h1>

      {featured && (
        <div className="bg-white rounded-xl p-4 shadow space-y-2">
          <div className="flex items-center space-x-4">
            <Image src={featured.image} alt={featured.name} width={64} height={64} className="rounded" />
            <div>
              <div className="text-xs text-orange-500 font-semibold">Annonce</div>
              <div className="font-bold">{featured.name}</div>
              <div className="text-xs text-gray-500">MMORPG | {featured.version}</div>
            </div>
          </div>
          <p className="text-sm text-gray-600">{featured.description}</p>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="font-bold text-lg">Serveurs</h2>
        {others.map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow flex space-x-4 items-center">
            <Image src={s.image} alt={s.name} width={48} height={48} className="rounded" />
            <div className="flex-1">
              <div className="font-bold">{s.name}</div>
              <div className="text-xs text-gray-500">Version {s.version}</div>
              <div className="text-sm text-gray-600">{s.description}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-500">{s.votes} votes</div>
              <button className="bg-black text-white text-sm px-3 py-1 rounded">Vote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
