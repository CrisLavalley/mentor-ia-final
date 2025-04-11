export default function Loader() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-blue-500 text-sm font-semibold animate-pulse">Cargando...</span>
        </div>
      </div>
    </div>
  );
}
