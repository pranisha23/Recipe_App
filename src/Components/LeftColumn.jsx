import React, { useState } from 'react'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import AddRecipe from './AddRecipe'

const LeftColumn = ({ recipes, setRecipes, onSelectRecipe }) => {
  const [showModal, setShowModal] = useState(false)

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe])

    setShowModal(false)
  }

  return (
    <div className="flex flex-col border-r border-gray-300">
      <div className="flex flex-row ml-3 mr-3 mb-4 justify-between ">
        <h1 className="pt-4 text-lg font-semibold">Recipe's List</h1>
        <img
          onClick={() => setShowModal(true)}
          className="pt-4 w-8 h-12 cursor-pointer"
          src={image1}
        />
      </div>
      <hr className="border border-gray-300 " />

      {recipes.length > 0 ? (
        <div className="pl-2 pt-2 pb-2 mb-[560px]">
          <ul className="list-none p-0">
            {recipes.map((recipe, index) => (
              <li key={index} className="mb-4">
                <div
                  className="flex flex-col"
                  onClick={() => {
                    onSelectRecipe(recipe)
                  }}
                >
                  <p className="text-lg text-gray-700 cursor-pointer">
                    {recipe.recipeName}
                  </p>
                  <div className="w-full border-t border-gray-300 mt-2"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col mt-40 mb-60 ml-28 mr-24">
          <img className="w-40 h-40" src={image2} />
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#75b6f9] text-white p-4 mt-4 rounded"
          >
            Add Recipe
          </button>
        </div>
      )}

      {showModal && (
        <AddRecipe
          onClose={() => setShowModal(false)}
          onAddRecipe={handleAddRecipe}
        />
      )}
    </div>
  )
}

export default LeftColumn
