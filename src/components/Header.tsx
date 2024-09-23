import { useEffect, useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"


export const Header = () => {
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    const fetchCategorties = useAppStore((state) => state.fetchCategorties)
    const categories = useAppStore((state) => state.categories)


    useEffect(() => {
        fetchCategorties()
    }, [])
    return (
        <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
            <div className='mx-auto container px-5 py-16'>
                <div className="flex justify-between items-center">
                    <div>
                        <img className='w-32' src='/logo.svg' alt="logotipo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold " : "text-white uppercase font-bold"} to='/'>Inicio</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"} to='/favoritos'>Favoritos</NavLink>

                    </nav>

                </div>
                {isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
                        <div className="space-y-4">
                            <label className="block text-white uppercase font-extrabold text-lg"
                                htmlFor="ingredient">Nombre o Ingredientes</label>
                            <input type="text" id="ingredient" name="ingrediente" className="p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o Ingrediente" />
                        </div>
                        <div className="space-y-4">
                            <label className="block text-white uppercase font-extrabold text-lg"
                                htmlFor="ingredient">Categoria</label>
                            <select id="ingredient" name="ingrediente" className="p-3 w-full rounded-lg focus:outline-none"
                            >
                                { }
                                <option>Selecciones</option>
                                {
                                    categories.drinks.map(category => (
                                        <option id={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <input className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase" type="submit" value='Buscar Recetas' />
                    </form>
                )}
            </div>
        </header >
    )
}
