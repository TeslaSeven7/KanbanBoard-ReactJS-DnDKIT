import { useState, useRef, useEffect } from 'react'
import CrossIcon from '../../assets/icons/CrossIcon'
import PlusIcon from '../../assets/icons/PlusIcon'
import generateId from '../../utils/generateID'
export default function ModalCard({ closeModal, onData }) {
  const [cardForm, setCardForm] = useState()
  const cardTitle = useRef()
  const cardFlair = useRef()
  const [cardColor, setCardColor] = useState('#ef4444')
  const cardContent = useRef()
  const [formChecks, setFormChecks] = useState({
    title: [0, 25],
    flair: [0, 20],
    content: [0, 400]
  })
  const [inputValues, setInputValues] = useState({
    id: generateId(),
    title: '',
    flair: '',
    color: '',
    accentColor: '',
    content: ''
  })
  function sendFormData() {
    if (inputValues === undefined) {
    } else {
      inputValues.color = cardColor
      inputValues.accentColor = cardColor + '24'
      const isObjectEmpty = (inputValues) => {
        for (const key in inputValues) {
          if (inputValues[key] === '') {
            return true
          }
        }
        return false
      }

      if (isObjectEmpty(inputValues)) {
        console.log('DO SOMETHING')
      } else {
        onData(inputValues)
        closeModal()
      }
    }
  }
  const errorHandler = () => {
    return true
  }
  const handleInputChange = (inputName, e) => {
    formChecks[inputName][0] = e.target.value.length
    if (formChecks[inputName][0] > formChecks[inputName][1]) {
      errorHandler(e, 'charLong')
      e.target.value = e.target.value.slice(0, formChecks[inputName][1])
      e.target.style.borderColor = 'red'
    } else {
      e.target.style.borderColor = '#3b85f1'
    }
    setInputValues({
      ...inputValues,
      [inputName]: e.target.value
    })
  }
  useEffect(() => {}, [formChecks])
  return (
    <div
      onClick={closeModal}
      className="fixed top-0 z-10  flex h-full w-full items-center justify-center bg-white bg-opacity-75"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[450px] rounded-md border border-zinc-300 bg-white px-6 py-8 shadow-sm"
      >
        <button
          className="ease absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-md bg-white transition-all hover:bg-gray-100"
          onClick={closeModal}
        >
          <CrossIcon />
        </button>
        <div className="mb-10 mt-7 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Create a new Task</h2>
        </div>
        <div className="mb-5 flex flex-col">
          <div className="flex items-center justify-between">
            <label htmlFor="" className="text-gray-500">
              Title
            </label>
            <span className="text-sm text-gray-500">
              {formChecks.title[0] + '/' + formChecks.title[1]}
            </span>
          </div>
          <input
            name="title"
            value={inputValues.title}
            onChange={(e) => handleInputChange('title', e)}
            ref={cardTitle}
            type="text"
            className="text-md rounded-md border border-zinc-300 px-3 py-2 font-semibold transition focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-2 flex flex-col">
          <div className="flex items-center justify-between">
            <label htmlFor="" className="text-gray-500">
              Flair
            </label>
            <span className="text-sm text-gray-500">
              {formChecks.flair[0] + '/' + formChecks.flair[1]}
            </span>
          </div>
          <input
            name="flair"
            value={inputValues.flair}
            onChange={(e) => handleInputChange('flair', e)}
            ref={cardFlair}
            type="text"
            className="text-md rounded-md border border-zinc-300 px-3 py-2 font-semibold transition focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-5 flex flex-row justify-between">
          <input
            className="flairs"
            type="radio"
            name="color"
            id="red"
            checked={cardColor === '#ef4444'}
            onChange={() => setCardColor('#ef4444')}
          />
          <label className="cursor-pointer" htmlFor="red">
            Red
          </label>
          <input
            className="flairs"
            type="radio"
            name="color"
            id="orange"
            checked={cardColor === '#f97316'}
            onChange={() => setCardColor('#f97316')}
          />
          <label className="cursor-pointer" htmlFor="orange">
            Orange
          </label>
          <input
            className="flairs"
            type="radio"
            name="color"
            id="green"
            checked={cardColor === '#84cc16'}
            onChange={() => setCardColor('#84cc16')}
          />
          <label className="flairs cursor-pointer" htmlFor="green">
            Green
          </label>
          <input
            className="flairs"
            type="radio"
            name="color"
            id="blue"
            checked={cardColor === '#0ea5e9'}
            onChange={() => setCardColor('#0ea5e9')}
          />
          <label className="flairs cursor-pointer" htmlFor="blue">
            Blue
          </label>
          <input
            className="flairs"
            type="radio"
            name="color"
            id="purple"
            checked={cardColor === '#a855f7'}
            onChange={() => setCardColor('#a855f7')}
          />
          <label className="flairs cursor-pointer" htmlFor="purple">
            Purple
          </label>

          <input
            className="flairs"
            type="radio"
            name="color"
            id="pink"
            checked={cardColor === '#ec4899'}
            onChange={() => setCardColor('#ec4899')}
          />
          <label className="flairs cursor-pointer" htmlFor="pink">
            Pink
          </label>
        </div>
        <div className="mb-5 flex flex-col">
          <div className="flex items-center justify-between">
            <label htmlFor="" className="text-gray-500">
              Content
            </label>
            <span className="text-sm text-gray-500">
              {formChecks.content[0] + '/' + formChecks.content[1]}
            </span>
          </div>
          <textarea
            name="content"
            value={inputValues.content}
            onChange={(e) => handleInputChange('content', e)}
            ref={cardContent}
            cols="30"
            rows="10"
            className="text-md rounded-md border border-zinc-300 px-3 py-2 font-semibold transition focus:border-blue-500 focus:outline-none"
          ></textarea>
        </div>
        <div className="flex w-full justify-center">
          <button
            onClick={sendFormData}
            className="flex h-[50px] w-[200px] min-w-[200px] items-center justify-center rounded-md border border-blue-600 bg-blue-500 p-4 font-semibold text-zinc-100 ring-blue-300 transition hover:ring-1"
          >
            <PlusIcon color={'currentColor'} width={'h-6'} height={'w-6'} />
            <span className="ms-3">Add card</span>
          </button>
        </div>
      </div>
    </div>
  )
}
