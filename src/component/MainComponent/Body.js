import React from 'react'
import { Link } from 'react-router-dom';

const allItems = [
  { to: '/ticTacToe', title: 'Tic Tac Toe', desc: 'Classic game with React state', kind: 'app' },
  { to: '/useMemoDemo', title: 'useMemo Demo', desc: 'Memoization to optimize renders', kind: 'learning' },
  { to: '/useRefDemo', title: 'useRef Demo', desc: 'Refs for DOM and values', kind: 'learning' },
  { to: '/romanToInteger', title: 'Roman → Integer', desc: 'Parsing algorithm practice', kind: 'app' },
  { to: '/charCounter', title: 'Character Counter', desc: 'Text utilities and hooks', kind: 'app' },
  { to: '/toDoList', title: 'ToDo List', desc: 'CRUD with local component state', kind: 'app' },
  { to: '/showFlag', title: 'Flag', desc: 'Conditional rendering exercise', kind: 'app' },
  { to: '/search', title: 'Search Logic', desc: 'Filter and list rendering', kind: 'app' },
];

const apps = allItems.filter(i => i.kind === 'app');
const learning = allItems.filter(i => i.kind === 'learning');

const Body = () => {
  return (
    <div className="min-h-[calc(100dvh-64px)] w-full ">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <section className="text-center">
          <p className="mt-2 text-slate-600 text-sm sm:text-base md:text-lg">
          A collection of mini apps and hook demos. Click any card to explore.
          </p>
        </section>

        <section className="mt-6 sm:mt-8">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-sm bg-sky-500"></span>
              Apps
            </h2>
            <div className="hidden sm:block h-px flex-1 ml-4 bg-gradient-to-r from-sky-300 to-transparent" />
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {apps.map((app) => (
              <Link key={app.to} to={app.to} className="group">
                <div className="h-32 rounded-2xl border border-sky-200 bg-sky-50/80 backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-sky-50 flex flex-col overflow-hidden">
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
          </div>
        </section>

        <section className="mt-8 sm:mt-12">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-sm bg-indigo-500"></span>
              Learning
            </h2>
            <div className="hidden sm:block h-px flex-1 ml-4 bg-gradient-to-r from-indigo-300 to-transparent" />
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {learning.map((app) => (
              <Link key={app.to} to={app.to} className="group">
                <div className="h-32 rounded-2xl border border-indigo-200 bg-indigo-50/80 backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-indigo-50 flex flex-col overflow-hidden">
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800">
                        {app.title}
                      </h3>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 transition-transform duration-300 group-hover:rotate-12">
                        →
                      </span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2">
                      {app.desc}
                    </p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-indigo-400 to-fuchsia-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>
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