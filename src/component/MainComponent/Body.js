import React from 'react'
import { Link } from 'react-router-dom';

const apps = [
  { to: '/ticTacToe', title: 'Tic Tac Toe', desc: 'Classic game with React state' },
  { to: '/useMemoDemo', title: 'useMemo Demo', desc: 'Memoization to optimize renders' },
  { to: '/useRefDemo', title: 'useRef Demo', desc: 'Refs for DOM and values' },
  { to: '/romanToInteger', title: 'Roman → Integer', desc: 'Parsing algorithm practice' },
  { to: '/charCounter', title: 'Character Counter', desc: 'Text utilities and hooks' },
  { to: '/toDoList', title: 'ToDo List', desc: 'CRUD with local component state' },
  { to: '/showFlag', title: 'Flag', desc: 'Conditional rendering exercise' },
  { to: '/search', title: 'Search Logic', desc: 'Filter and list rendering' },
];

const Body = () => {
  return (
    <div className="min-h-[calc(100dvh-64px)] w-full ">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <section className="text-center">
          <h1 className="m-1 p-1 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600">
            React Learnings Playground
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base md:text-lg">
            A collection of mini apps and hook demos. Click any card to explore.
          </p>
        </section>

        <section className="mt-8 sm:mt-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {apps.map((app) => (
            <Link key={app.to} to={app.to} className="group">
              <div className="h-32 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white flex flex-col overflow-hidden">
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-800">
                      {app.title}
                    </h3>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600 transition-transform duration-300 group-hover:rotate-12">
                      →
                    </span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2">
                    {app.desc}
                  </p>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-sky-400 to-fuchsia-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-10 sm:mt-14">
          <div className="rounded-xl border border-dashed border-slate-300 p-4 sm:p-6 text-center text-slate-500">
            Tip: Use the header navigation or these cards to jump between demos.
          </div>
        </section>
      </div>
    </div>
  )
}

export default Body;