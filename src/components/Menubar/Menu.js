import { useState, useEffect } from 'react'

export default function Menu({ shown, direction }) {
  const [side, setSide] = useState('left')
  
  useEffect(() => {
    direction === 'left' ? setSide('left') : setSide('right')
  }, [direction])

  return (
    <div className={`absolute ${shown ? 'opacity-100' : 'opacity-0 '} transition-all ease-linear delay-100 ${side}-0 w-56 bg-gray-600 shadow-xl origin-top-right rounded-b-md ring-1 ring-black ring-opacity-5`}>
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Account settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Support
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          License
        </a>
        <form method="POST" action="#">
          <button
            type="submit"
            className="block w-full px-4 py-2 text-sm text-left text-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
