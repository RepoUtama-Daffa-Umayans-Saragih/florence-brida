import EmergencyInfo from '../../components/EmergencyInfo';

export default function OfflinePage() {
  return <main className="mx-auto min-h-screen max-w-lg space-y-4 bg-slate-50 p-5"><h1 className="text-xl font-bold">FLORENCE · Informasi darurat</h1><p>Halaman utama tidak dapat diakses. Informasi yang pernah disimpan tersedia di bawah ini.</p><EmergencyInfo /><a href="/" className="block text-blue-700 underline">Coba kembali ke portal</a></main>;
}
