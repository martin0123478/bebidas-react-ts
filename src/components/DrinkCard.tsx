import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"


type DrinkCardProps = {
    drink: Drink
}


export const DrinkCard = ({ drink }: DrinkCardProps) => {
    const selectRecipe = useAppStore((state) => state.selectRecipe)
    return (
        <div className="shadow-lg border ">

            <div className="overflow-hidden">
                <img src={drink.strDrinkThumb} alt={`imagen de ${drink.strDrink}`}
                    className="hover:scale-125 transition-transform rotate-2" />
            </div>
            <div className="p-5 ">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button type="button"
                    onClick={() => selectRecipe(drink.idDrink)}
                    className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg">Ver Receta</button>
            </div>
        </div>
    )
}
