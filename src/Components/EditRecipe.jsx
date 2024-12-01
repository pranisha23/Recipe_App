import React, { useRef, useState } from 'react'
import image3 from '../images/image3.png'

const EditRecipe = ({ onClose, selectedRecipe, onUpdateRecipe }) => {
  const modalRef = useRef()

  const [recipeData, setRecipeData] = useState(selectedRecipe)

  const handleChange = (e) => {
    const { name, value } = e.target
    setRecipeData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    onUpdateRecipe(recipeData)

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
      <div className="mt-4 flex flex-col gap-5 text-black bg-white rounded-md w-full max-w-[90%] sm:max-w-lg lg:max-w-3xl">
        <div className="flex flex-row justify-between mt-3 ml-4 mr-4 gap-4">
          <h1 className="text-lg font-semibold text-gray-800">Edit Recipe</h1>
          <img
            onClick={onClose}
            className="mt-1 w-5 h-5 cursor-pointer"
            src={image3}
          />
        </div>
        <hr className="border border-gray-300" />

        <div className="flex flex-col px-4">
          <div className="flex flex-col">
            <label className="text-gray-700">Recipe Name</label>
            <input
              required
              name="recipeName"
              className="border border-gray-300 rounded mt-2 p-2"
              type="text"
              value={recipeData.recipeName}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col lg:flex-row mt-4 gap-4">
            <div className="flex flex-col w-full lg:w-1/2">
              <label className="text-gray-700">Recipe Ingredients</label>
              <textarea
                required
                name="recipeIngredients"
                className="border border-gray-300 rounded mt-2 h-40 p-3 "
                value={recipeData.recipeIngredients}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-full lg:w-1/2">
              <label className="text-gray-700">Recipe Description</label>
              <textarea
                required
                name="recipeDescription"
                className="border border-gray-300 rounded mt-2 h-40 p-3 "
                value={recipeData.recipeDescription}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <hr className="border border-gray-300" />

        <div className="flex flex-row justify-end px-4 py-3 pt-0 gap-3">
          <button
            onClick={onClose}
            className="bg-white text-gray-700 p-2 border border-gray-400 rounded pl-4 pr-4"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-[#548cfb] hover:bg-[#4777d8] text-white p-2 pl-3 pr-3  rounded"
          >
            Edit Recipe
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditRecipe
