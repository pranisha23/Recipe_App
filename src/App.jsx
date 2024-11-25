import { useState } from 'react'
import LeftColumn from './Components/LeftColumn'
import RightColumn from './Components/RightColumn'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const handleUpdateRecipe = (updatedRecipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.recipeName === selectedRecipe.recipeName ? updatedRecipe : recipe
      )
    )
    setSelectedRecipe(updatedRecipe)
  }

  const handleDeleteRecipe = () => {
    if (selectedRecipe) {
      setRecipes((prevRecipes) =>
        prevRecipes.filter(
          (recipe) => recipe.recipeName !== selectedRecipe.recipeName
        )
      )
      setSelectedRecipe(null)
    }
  }

  return (
    <div className="flex flex-row border border-gray-300 ml-24 mr-24 mt-8">
      <div className=" basis-1/4">
        <LeftColumn
          recipes={recipes}
          setRecipes={setRecipes}
          onSelectRecipe={setSelectedRecipe}
        />
      </div>
      <div className="basis-3/4">
        <RightColumn
          selectedRecipe={selectedRecipe}
          onDeleteRecipe={handleDeleteRecipe}
          onUpdateRecipe={handleUpdateRecipe}
        />
      </div>
    </div>
  )
}

export default App
