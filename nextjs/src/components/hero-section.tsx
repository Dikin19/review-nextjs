import Link from "next/link"

export async function HeroSection({ page = 1 }: { page?: number }) {
  const limit = 5
  const skip = (page - 1) * limit

  const res = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`, { cache: "no-store" })
  if (!res.ok) {
    throw new Error("Failed to fetch users")
  }
  const data: {
    users: Array<{ id: number; firstName: string; lastName: string; image: string; email: string; username: string }>
    total: number
    skip: number
    limit: number
  } = await res.json()

  const totalPages = Math.max(1, Math.ceil((data.total || 0) / limit))
  const currentPage = Math.min(Math.max(1, page), totalPages)

  return (
    <section className="px-4 py-12 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Users</h2>

        <div className="overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {data.users.map((user) => (
              <div key={user.id} className="w-64 flex-shrink-0 bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-200">
                <div className="p-4 flex items-center gap-3">
                  <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="w-14 h-14 rounded-full object-cover border" />
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-800 truncate">{user.firstName} {user.lastName}</p>
                    <p className="text-sm text-gray-500 truncate">@{user.username}</p>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <p className="text-sm text-gray-600 truncate" title={user.email}>{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <nav aria-label="Pagination" className="overflow-x-auto">
          <ul className="flex items-center gap-2 min-w-max">
            <li>
              <Link
                href={`/?page=${Math.max(1, currentPage - 1)}`}
                className={`px-3 py-2 rounded border ${currentPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-gray-50"}`}
                prefetch={false}
              >
                Prev
              </Link>
            </li>
            {Array.from({ length: totalPages }).map((_, idx) => {
              const p = idx + 1
              const isActive = p === currentPage
              return (
                <li key={p}>
                  <Link
                    href={`/?page=${p}`}
                    className={`px-3 py-2 rounded border ${isActive ? "bg-orange-500 text-white border-orange-500" : "hover:bg-gray-50"}`}
                    prefetch={false}
                  >
                    {p}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link
                href={`/?page=${Math.min(totalPages, currentPage + 1)}`}
                className={`px-3 py-2 rounded border ${currentPage === totalPages ? "pointer-events-none opacity-50" : "hover:bg-gray-50"}`}
                prefetch={false}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
