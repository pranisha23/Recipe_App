import React, { useState } from 'react'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import AddRecipe from './AddRecipe'

const LeftColumn = ({ recipes, onAddRecipe, onSelectRecipe }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex flex-col lg:border-r border-gray-300 ">
      <div className="flex flex-row ml-3 mr-3 mb-4 justify-between ">
        <h1 className="pt-4 text-lg font-semibold">Recipe's List</h1>
        <img
          onClick={() => setShowModal(true)}
          className="pt-5 w-5 h-10 cursor-pointer"
          src={image1}
        />
      </div>
      <hr className="border border-gray-300 " />

      {recipes.length > 0 ? (
        <div className="pt-3 mb-[560px]">
          <ul className="list-none p-0">
            {recipes.map((recipe) => (
              <li key={recipe.id} className="mb-4">
                <div
                  className="flex flex-col"
                  onClick={() => {
                    onSelectRecipe(recipe)
                  }}
                >
                  <p className="text-lg text-gray-700 cursor-pointer ml-3 pb-3 ">
                    {recipe.recipeName}
                  </p>
                  <hr className="border border-gray-300 w-full" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-44 mb-24 lg:mt-48 lg:mb-32 lg:ml-20 lg:mr-24 ">
          <img className="w-48 h-44 lg:w-48 lg:h-40" src={image2} />
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#548cfb]  text-white ml-4 mr-5 pl-4 pr-4 pb-2 pt-1 mt-6 rounded"
          >
            Add Recipe
          </button>
        </div>
      )}

      {showModal && (
        <AddRecipe
          onClose={() => setShowModal(false)}
          onAddRecipe={onAddRecipe}
        />
      )}
    </div>
  )
}

export default LeftColumn
