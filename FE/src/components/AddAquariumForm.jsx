import React, { useState } from "react";
import axios from "axios";
import { PlusIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

const API_BASE = "https://aquascape.onrender.com/aquariums";

export default function AddAquariumForm({ onAdded }) {
  const [form, setForm] = useState({ name: "", volume: "", location: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/aquariums`, form);
      setForm({ name: "", volume: "", location: "" });
      onAdded();
    } catch (err) {
      console.error("❌ Gagal menambah aquarium:", err);
      alert("Gagal menambah aquarium!");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg shadow mb-4">
        <h3 className="text-lg font-semibold mb-2">Tambah Aquarium</h3>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Nama aquarium"
            className="border p-2 rounded w-1/3"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Volume (L)"
            className="border p-2 rounded w-1/3"
            value={form.volume}
            onChange={(e) => setForm({ ...form, volume: e.target.value })}
          />
          <input
            type="text"
            placeholder="Lokasi"
            className="border p-2 rounded w-1/3"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Tambah
        </button>
      </form>
    </>
  );
}
