import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [segment, setSegment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log({ firstName, password, segment });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">Líder Boss</h1>
          <p className="text-slate-300 text-sm">Sistema de Abordagem Profissional</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name Input */}
          <div>
            <label className="block text-slate-300 text-sm mb-2">Primeiro Nome</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Digite seu primeiro nome"
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-colors"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-slate-300 text-sm mb-2">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-colors"
            />
          </div>

          {/* Segment Dropdown */}
          <div>
            <label className="block text-slate-300 text-sm mb-2">Segmento de Atuação</label>
            <select
              value={segment}
              onChange={(e) => setSegment(e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-md text-slate-100 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-colors appearance-none cursor-pointer"
            >
              <option value="">Selecione seu segmento</option>
              <option value="tech">Tecnologia</option>
              <option value="finance">Finanças</option>
              <option value="retail">Varejo</option>
              <option value="healthcare">Saúde</option>
              <option value="education">Educação</option>
              <option value="other">Outro</option>
            </select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold py-3 rounded-md transition-colors"
          >
            Entrar no Sistema
          </Button>
        </form>
      </div>
    </div>
  );
}

