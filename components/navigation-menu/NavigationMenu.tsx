import Logo from './Logo'
import { FaBars } from 'react-icons/fa'
import { NavItems } from './NavItems'

type NavigationMenuProps = {
  menuItems?: string[]
}
export default function NavigationMenu({ menuItems }: NavigationMenuProps) {
  return (
    <div className="border-2 relative pt-6 lg:pt-8 flex  items-center justify-between md:justify-center text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200 min-h-[120px]">
      <Logo className="w-auto h-5" />
      <div className="flex items-center">
        <FaBars className=" text-slate-500 hover:text-slate-600 w-6 h-6 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300 mr-12" />
        <div className="hidden md:flex items-center">
          <NavItems />
        </div>
      </div>
    </div>
  )
}
// ;<div className="relative pt-6 lg:pt-8 flex border-2 items-center justify-between text-slate-700 font-semibold text-sm leading-6 dark:text-slate-200">
//   <Logo className="w-auto h-5" />
//   <div className="flex items-center">
//     <SearchButton className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300">
//       <span className="sr-only">Search</span>
//       <svg
//         width="24"
//         height="24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         aria-hidden="true"
//       >
//         <path d="m19 19-3.5-3.5" />
//         <circle cx="11" cy="11" r="6" />
//       </svg>
//     </SearchButton>
//     <NavPopover className="-my-1 ml-2 -mr-1" display="md:hidden" />
//     <div className="hidden md:flex items-center">
//       <nav>
//         <ul className="flex items-center gap-x-8">
//           <NavItems />
//         </ul>
//       </nav>
//       <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
//         <ThemeToggle />
//         <a
//           href="https://github.com/tailwindlabs/tailwindcss"
//           className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
//         >
//           <span className="sr-only">Tailwind CSS on GitHub</span>
//           <svg
//             viewBox="0 0 16 16"
//             className="w-5 h-5"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
//           </svg>
//         </a>
//       </div>
//     </div>
//   </div>
// </div>

//TODO: Implement hamburger popover menu, implement theme toggle( light, dark )
