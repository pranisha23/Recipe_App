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
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setRecipeData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose()
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!recipeData.recipeName.trim()) {
      newErrors.recipeName = 'Recipe Name is required'
    }
    if (!recipeData.recipeIngredients.trim()) {
      newErrors.recipeIngredients = 'Recipe Ingredients are required'
    }
    if (!recipeData.recipeDescription.trim()) {
      newErrors.recipeDescription = 'Recipe Description is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmitData = (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    onAddRecipe(recipeData)

    setRecipeData(initialRecipeData)

    onClose()
  }

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-4 flex flex-col gap-5 text-black bg-white rounded-md w-full max-w-[90%] sm:max-w-lg  lg:max-w-3xl">
        <div className="flex flex-row justify-between mt-3 ml-4 mr-4 gap-4">
          <h1 className="text-lg font-semibold text-gray-800">Add Recipe</h1>
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
              name="recipeName"
              className="border border-gray-300 rounded mt-2 p-2"
              type="text"
              placeholder="Enter the recipe's name"
              value={recipeData.recipeName}
              onChange={handleChange}
            />
            {errors.recipeName && (
              <span className="text-red-500 text-sm">{errors.recipeName}</span>
            )}
          </div>

          <div className="flex flex-col lg:flex-row mt-4 gap-4">
            <div className="flex flex-col w-full lg:w-1/2">
              <label className="text-gray-700">Recipe Ingredients</label>
              <textarea
                name="recipeIngredients"
                className="border border-gray-300 rounded mt-2 h-40 p-3 "
                placeholder="Enter ingredients separated by asterisks, e.g., 1 tablespoon sugar * 2 tablespoons honey"
                value={recipeData.recipeIngredients}
                onChange={handleChange}
              />
              {errors.recipeIngredients && (
                <span className="text-red-500 text-sm">
                  {errors.recipeIngredients}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full lg:w-1/2">
              <label className="text-gray-700">Recipe Description</label>
              <textarea
                name="recipeDescription"
                className="border border-gray-300 rounded mt-2 h-40 p-3 "
                placeholder="Enter steps separated by asterisks, e.g., 1. Boil water for 5 minutes * 2. Add sugar"
                value={recipeData.recipeDescription}
                onChange={handleChange}
              />
              {errors.recipeDescription && (
                <span className="text-red-500 text-sm">
                  {errors.recipeDescription}
                </span>
              )}
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
            onClick={handleSubmitData}
            type="submit"
            className="bg-[#548cfb] hover:bg-[#4777d8] text-white p-2 pl-3 pr-3 rounded"
          >
            Add Recipe
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddRecipe
