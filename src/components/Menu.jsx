function Menu({ onChangePage }) {
return (
    <header className="app-header">
        <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-center py-3">
                <nav className="flex gap-3">
                    <button
                        className="px-4 py-1.5 rounded bg-gray-200 text-gray-800"
                        onClick={() => onChangePage("home")}
                    >
                        Home
                    </button>
                    <button
                        className="px-4 py-1.5 rounded bg-gray-200 text-gray-800"
                        onClick={() => onChangePage("employee")}
                    >
                        Employee
                    </button>
                </nav>
            </div>
        </div>
    </header>
);
}

export default Menu;