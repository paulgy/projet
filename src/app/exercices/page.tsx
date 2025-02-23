import Link from 'next/link'

export default function ExercicesPage() {
  return (
    <main className="min-h-screen p-8">
      <nav className="mb-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          ← Retour à l&apos;accueil
        </Link>
      </nav>

      <h1 className="text-3xl font-bold mb-6">Exercices Interactifs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Exercice 1</h2>
          <p className="text-gray-600 mb-4">
            Description courte de l&apos;exercice et de ses objectifs.
          </p>
          <Link href="/exercices/exo">

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Commencer
          </button>
          </Link>
        </div>

        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3">Exercice 2</h2>
          <p className="text-gray-600 mb-4">
            Description courte de l&apos;exercice et de ses objectifs.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Commencer
          </button>
        </div>
      </div>
    </main>
  )
}