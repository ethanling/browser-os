export default function Button({ title, active, action }) {
    return (
        <div>
            <button type="button" onClick={action} className={`${active ? 'bg-gray-600' : 'bg-gray-800'} inline-flex justify-center w-full shadow-sm px-4 py-2 text-sm font-medium text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true"`}>
                { title }
            </button>
        </div>
    );
}
