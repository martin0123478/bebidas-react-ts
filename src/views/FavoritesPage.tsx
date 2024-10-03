import { useMemo } from "react"
import { DrinkCard } from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"



export const FavoritesPage = () => {
    const favorites = useAppStore((state) => state.favorites)
    const hasFavorites = useMemo(() => favorites.length, [favorites])
    return (
        <>
            <h1 className="font-extrabold">Favoritos</h1>
            {hasFavorites ? (
                <div className="grid grid-cols-3 my-10 gap-10">
                    {favorites.map(recipe => (
                        <DrinkCard
                            key={recipe.idDrink}
                            drink={recipe}
                        ></DrinkCard>
                    ))}
                </div>
            ) :
                (
                    <p className="my-10 text-center text-2xl">Los favoritos se mostraran aqui</p>
                )

            }
        </>
    )
}
