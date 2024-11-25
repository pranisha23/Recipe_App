import React, { useState } from 'react'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import EditRecipe from './EditRecipe'

const RightColumn = ({ selectedRecipe, onDeleteRecipe, onUpdateRecipe }) => {
  if (!selectedRecipe) {
    return (
      <div className="flex flex-col items-center mt-60 ml-20 ">
        <img className="w-80" src={image4} />
        <h1 className="ml-8 mt-4">Select a recipe for details!</h1>
      </div>
    )
  }

  const { recipeName, recipeIngredients, recipeDescription } = selectedRecipe

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex flex-col mt-5 ml-20 mr-20">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">{recipeName}</h1>
        <div className="flex gap-6">
          <img
            onClick={() => setShowModal(true)}
            className="w-6 h-6 cursor-pointer"
            src={image5}
          />
          {showModal && (
            <EditRecipe
              onClose={() => setShowModal(false)}
              selectedRecipe={selectedRecipe}
              onUpdateRecipe={onUpdateRecipe}
            />
          )}

          <img
            onClick={onDeleteRecipe}
            className="w-6 h-6 cursor-pointer"
            src={image6}
          />
        </div>
      </div>
      <hr className="border border-gray-300 mb-3" />

      <div className="mb-4">
        <h2 className="text-base font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          {recipeIngredients.split('*').map((ingredient, index) => (
            <li key={index}>{ingredient.trim()}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-base font-semibold">Description</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          {recipeDescription.split('*').map((step, index) => (
            <li key={index}>{step.trim()}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RightColumn
