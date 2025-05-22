
import { useState } from 'react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const initialServers = [
  {
    name: "Epic Fantasy",
    version: "v1.0",
    description: "Embark on an epic fantasy adventure. Massive world, unique classes, and engaging quests.",
    image: "/epic-fantasy.jpg",
    votes: 12,
    isSponsored: true,
  },
  {
    name: "MythicalWorld",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    version: "2.5",
    description: "A mystical MMORPG with custom dungeons, epic raids, and powerful artifacts.",
    image: "/mythicalworld.jpg",
    votes: 8,
    isSponsored: false,
  },
  {
    name: "DarkRealm",
    image: "https://images.unsplash.com/photo-1590608897129-79da83dba8d7?auto=format&fit=crop&w=400&q=80",
    version: "3.2",
    description: "Immerse yourself in a dark, immersive realm. High rates, PvP, and PvE content.",
    image: "/darkrealm.jpg",
    votes: 5,
    isSponsored: false,
  },
  {
    name: "FantasyLand",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80",
    version: "1.8",
    description: "Classic MMORPG gameplay with friendly community and frequent updates.",
    image: "/fantasyland.jpg",
    votes: 4,
    isSponsored: false,
  },
];

export default function Home() {
  const [servers, setServers] = useState(initialServers);
  const [page, setPage] = useState(1);
  const [newServer, setNewServer] = useState({ name: '', version: '', description: '', image: '', isSponsored: false });

  const sortedServers = [...servers].sort((a, b) => b.votes - a.votes);

  const handleVote = (index) => {
    const updatedServers = [...servers];
    updatedServers[index].votes++;
    setServers(updatedServers);
  };

  const handleAddServer = () => {
    setServers([...servers, { ...newServer, votes: 0 }]);
    setNewServer({ name: '', version: '', description: '', image: '', isSponsored: false });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">MMO RPG TOP</h1>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Annonce</h2>
        {servers
          .filter((s) => s.isSponsored)
          .map((s, index) => (
            <Card key={s.name} className="flex gap-4">
              <img src={s.image} alt={s.name} className="w-24 h-24 object-cover rounded" />
              <CardContent>
                <span className="text-xs text-yellow-600 font-bold">Annonce</span>
                <h3 className="text-lg font-bold">{s.name}</h3>
                <p className="text-sm text-gray-500">MMORPG | {s.version}</p>
                <p>{s.description}</p>
              </CardContent>
            </Card>
          ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Serveurs</h2>
        {sortedServers
          .filter((s) => !s.isSponsored)
          .map((s, index) => (
            <Card key={s.name} className="flex justify-between items-center mb-4">
              <div className="flex gap-4">
                <img src={s.image} alt={s.name} className="w-20 h-20 object-cover rounded" />
                <CardContent>
                  <h3 className="text-lg font-bold">{s.name}</h3>
                  <p className="text-sm text-gray-500">Version {s.version}</p>
                  <p>{s.description}</p>
                </CardContent>
              </div>
              <div className="p-2 text-center">
                <div className="text-lg font-bold">{s.votes}</div>
                <div className="text-sm text-gray-500">votes</div>
                <Button size="sm" className="mt-2" onClick={() => handleVote(index)}>Vote</Button>
              </div>
            </Card>
          ))}
      </section>

      <div className="flex justify-center mt-6">
        <Button variant="outline">1</Button>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Ajouter un serveur</h2>
        <div className="grid gap-4">
          <div>
            <Label>Nom</Label>
            <Input value={newServer.name} onChange={(e) => setNewServer({ ...newServer, name: e.target.value })} />
          </div>
          <div>
            <Label>Version</Label>
            <Input value={newServer.version} onChange={(e) => setNewServer({ ...newServer, version: e.target.value })} />
          </div>
          <div>
            <Label>Description</Label>
            <Input value={newServer.description} onChange={(e) => setNewServer({ ...newServer, description: e.target.value })} />
          </div>
          <div>
            <Label>Image URL</Label>
            <Input value={newServer.image} onChange={(e) => setNewServer({ ...newServer, image: e.target.value })} />
          </div>
          <div>
            <Label>
              <input type="checkbox" checked={newServer.isSponsored} onChange={(e) => setNewServer({ ...newServer, isSponsored: e.target.checked })} /> Annonce sponsorisée
            </Label>
          </div>
          <Button onClick={handleAddServer}>Ajouter</Button>
        </div>
      </section>
    </div>
  );
}
