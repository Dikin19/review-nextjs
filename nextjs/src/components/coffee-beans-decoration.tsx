export function CoffeeBeansDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Coffee beans scattered around */}
      <div className="absolute top-20 left-10 w-4 h-6 bg-amber-800 rounded-full transform rotate-12 opacity-20"></div>
      <div className="absolute top-32 left-32 w-3 h-5 bg-amber-900 rounded-full transform -rotate-45 opacity-15"></div>
      <div className="absolute top-64 left-20 w-5 h-7 bg-amber-800 rounded-full transform rotate-45 opacity-10"></div>
      <div className="absolute top-96 left-8 w-4 h-6 bg-amber-900 rounded-full transform -rotate-12 opacity-20"></div>

      <div className="absolute top-40 right-16 w-4 h-6 bg-amber-800 rounded-full transform rotate-45 opacity-15"></div>
      <div className="absolute top-72 right-32 w-3 h-5 bg-amber-900 rounded-full transform -rotate-30 opacity-20"></div>
      <div className="absolute top-96 right-12 w-5 h-7 bg-amber-800 rounded-full transform rotate-60 opacity-10"></div>

      <div className="absolute bottom-32 left-24 w-4 h-6 bg-amber-800 rounded-full transform -rotate-45 opacity-15"></div>
      <div className="absolute bottom-48 right-20 w-3 h-5 bg-amber-900 rounded-full transform rotate-30 opacity-20"></div>
      <div className="absolute bottom-64 left-1/2 w-4 h-6 bg-amber-800 rounded-full transform -rotate-60 opacity-10"></div>
    </div>
  )
}
