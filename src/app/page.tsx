import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-blue-600">
          Site Pédagogique Interactif
        </h1>
        <p className="mt-2 text-gray-600">
          Bienvenue sur cette plateforme d&apos;apprentissage
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Link href="/exercices" className="p-6 bg-white rounded-lg shadow-md block hover:shadow-lg transition-shadow">
  <h2 className="text-xl font-semibold mb-4">Exercices Interactifs</h2>
  <p className="text-gray-600">
    Découvrez nos exercices interactifs pour tester vos connaissances.
  </p>
</Link>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Ressources Pédagogiques</h2>
          <p className="text-gray-600">
            Accédez à des ressources pédagogiques enrichies.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Suivre sa Progression</h2>
          <p className="text-gray-600">
            Visualisez votre progression et vos résultats.
          </p>
        </div>
      </section>
    </main>
  );
}