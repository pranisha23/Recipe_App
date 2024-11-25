import React, { useRef, useState } from 'react'
import image3 from '../images/image3.png'

const AddRecipe = ({ onClose, onAddRecipe }) => {
  const modalRef = useRef()

  const initialRecipeData = {
    recipeName: '',
    recipeIngredients: '',
    recipeDescription: '',
  }

  const [recipeData, setRecipeData] = useState(initialRecipeData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setRecipeData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onAddRecipe(recipeData)

    setRecipeData(initialRecipeData)

    onClose()
  }

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose()
    }
  }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-4 flex flex-col gap-5 t=ext-black bg-white ">
        <div className="flex flex-row justify-between mt-3 ml-4 mr-4 gap-96">
          <h1 className="text-lg font-semibold">Add Recipe</h1>
          <img
            onClick={onClose}
            className="w-6 h-6 cursor-pointer "
            src={image3}
          />
        </div>
        <hr className="border border-gray-300" />
        <div className="flex flex-col ml-4 mr-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-gray-700">Recipe Name</label>
              <input
                name="recipeName"
                className="border border-gray-300 rounded mt-2"
                type="text"
                placeholder="Enter the recipe's name"
                value={recipeData.recipeName}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-row mt-4 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700">Recipe Ingredients</label>
                <textarea
                  name="recipeIngredients"
                  className="border border-gray-300 rounded mt-2 h-52 p-3 w-96"
                  type="text"
                  placeholder="Enter each ingredients seperated by asterik. for ex.1 table spoon sugar * 2 table spoon honey"
                  value={recipeData.recipeIngredients}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700">Recipe Description</label>
                <textarea
                  name="recipeDescription"
                  className="border border-gray-300 rounded mt-2 h-52 p-3 w-96"
                  type="text"
                  placeholder="Enter each description seperated by asterik. for ex.1 Boil water for 5 mins. *Add sugar."
                  value={recipeData.recipeDescription}
                  onChange={handleChange}
                />
              </div>
            </div>
            <hr className="border border-gray-300" />
            <div className="flex flex-row justify-end mr-3 mb-3 gap-3">
              <button
                onClick={onClose}
                className="bg-white text-gray-700 p-2 mt-2 border border-gray-400 rounded pl-4 pr-4"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#75b6f9] text-white p-2 mt-2 rounded"
              >
                Add Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddRecipe
