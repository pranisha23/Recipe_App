import { useEffect, useState } from 'react'
import LeftColumn from './Components/LeftColumn'
import RightColumn from './Components/RightColumn'
import axios from 'axios'

const App = () => {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3000/recipes')
      .then((res) => setRecipes(res.data))
      .catch((e) => console.error('Error fetching recipes:', e))
  }, [])

  const handleAddRecipe = (newRecipe) => {
    axios
      .post('http://localhost:3000/recipes', newRecipe)
      .then((res) => setRecipes((prev) => [...prev, res.data]))
      .catch((e) => console.error('Error adding recipe:', e))
  }

  const handleUpdateRecipe = (updatedRecipe) => {
    axios
      .put(`http://localhost:3000/recipes/${updatedRecipe.id}`, updatedRecipe)
      .then(() => {
        setRecipes((prev) =>
          prev.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
          )
        )
        setSelectedRecipe(updatedRecipe)
      })
      .catch((e) => console.error('Error updating recipe:', e))
  }

  const handleDeleteRecipe = (id) => {
    axios
      .delete(`http://localhost:3000/recipes/${id}`)
      .then(() => {
        setRecipes((prev) => prev.filter((recipe) => recipe.id !== id))
        setSelectedRecipe(null)
      })
      .catch((e) => console.error('Error deleting recipe:', e))
  }

  return (
    <div className="flex flex-row border border-gray-300 ml-24 mr-24 mt-8">
      <div className=" basis-1/4">
        <LeftColumn
          recipes={recipes}
          onAddRecipe={handleAddRecipe}
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
