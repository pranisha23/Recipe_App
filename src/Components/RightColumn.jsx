import React, { useState } from 'react'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'
import EditRecipe from './EditRecipe'

const RightColumn = ({ selectedRecipe, onDeleteRecipe, onUpdateRecipe }) => {
  if (!selectedRecipe) {
    return (
      <div className="flex flex-col items-center lg:mt-48 lg:mb-0 mt-40 mb-72">
        <img className="w-80 " src={image4} />
        <h1 className="ml-7 mt-5 ">Select a recipe for details!</h1>
      </div>
    )
  }

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex flex-col lg:mt-4 lg:mb-0 mb-80">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-lg font-semibold ml-4">
          {selectedRecipe.recipeName}
        </h1>
        <div className="flex gap-6 mr-4">
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
            onClick={() => onDeleteRecipe(selectedRecipe.id)}
            className="w-6 h-6 cursor-pointer"
            src={image6}
          />
        </div>
      </div>
      <hr className="border border-gray-300 mb-3 w-full" />

      <div className="mb-4 ml-4">
        <h2 className="text-xl font-semibold pb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          {selectedRecipe.recipeIngredients
            .split('*')
            .map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li>
            ))}
        </ul>
      </div>

      <div className="ml-4">
        <h2 className="text-xl font-semibold pb-2">Direction</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          {selectedRecipe.recipeDescription.split('*').map((step, index) => (
            <li key={index}>{step.trim()}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RightColumn
