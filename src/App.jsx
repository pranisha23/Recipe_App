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
    <div className="flex flex-col lg:flex-row border border-gray-300 border-t-0 border-b-0 ml-4 mr-4 lg:ml-24 lg:mr-24 mt-10 ">
      <div className="basis-full lg:basis-1/4 mb-6 lg:mb-0">
        <LeftColumn
          recipes={recipes}
          onAddRecipe={handleAddRecipe}
          onSelectRecipe={setSelectedRecipe}
        />
      </div>
      <div className="basis-full lg:basis-3/4">
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
