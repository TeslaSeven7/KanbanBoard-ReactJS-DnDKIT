import React, { useState, useEffect } from 'react'
import DeleteIcon from '../assets/icons/DeleteIcon'
import DragIcon from '../assets/icons/DragIcon'
import EditIcon from '../assets/icons/EditIcon'
import { createPortal } from 'react-dom'
import ModalEditCard from './modals/ModalEditCard'
export default function CardContainer({
  title,
  flair,
  color,
  accentColor,
  content,
  delCard,
  updCard,
  id
}) {
  const [cardContent, setCardContent] = useState({
    id: id,
    title: title,
    flair: flair,
    color: color,
    accentColor: accentColor,
    content: content
  })
  const [showEditCardModal, setShowEditCardModal] = useState(false)
  console.log(accentColor)
  console.log(cardContent.accentColor)

  useEffect(() => {
    const textareas = document.querySelectorAll('#textArea')
    if (textareas) {
      for (let i = 0; i < textareas.length; i++) {
        textareas[i].style.height = '5px'
        textareas[i].style.height = textareas[i].scrollHeight + 'px'
      }
    }
  }, [])

  function updateCard(newCard) {
    console.log(newCard)
    setCardContent((prevCardContent) => {
      const updatedCardContent = { ...prevCardContent, ...newCard }
      //console.log(updatedCardContent);

      return updatedCardContent
    })
    updCard(newCard)
  }
  return (
    <div className="mb-5 overflow-x-hidden rounded-md border border-zinc-300 bg-white p-6">
      <div className="flex items-center justify-between">
        <span
          className=" rounded-full border  px-3 py-1 font-semibold "
          style={{
            color: cardContent.color,
            backgroundColor: cardContent.accentColor,
            borderColor: cardContent.color + '30'
          }}
        >
          {cardContent.flair}
        </span>
        <button className="cursor-grab">
          <DragIcon />
        </button>
      </div>
      <input
        type="text"
        className="mb-2 mt-5 w-full text-start text-xl font-semibold text-gray-800 focus:outline-none"
        placeholder="Wireframing"
        value={cardContent.title}
      />

      <textarea
        name="cardDescription"
        cols="30"
        rows="1"
        spellCheck="false"
        id="textArea"
        onInput={(e) => autoGrowTextarea(e)}
        className="scrollbar w-full resize-none bg-transparent text-gray-500 focus:outline-none"
        value={cardContent.content}
        onChange={(e) => {}}
        disabled="disabled"
      ></textarea>

      <p className="mb-5 text-start text-gray-500"></p>
      <div className="relative">
        <div className="absolute -left-7 right-0 h-[1px] w-[120%] bg-zinc-300"></div>
        <div className="flex h-5 items-center justify-end pt-5">
          <button
            className="me-5"
            onClick={() => setShowEditCardModal(!showEditCardModal)}
          >
            <EditIcon color={'#a1a1aa'} />
          </button>
          <button onClick={() => delCard(id)}>
            <DeleteIcon color={'#a1a1aa'} />
          </button>
        </div>
      </div>
      {showEditCardModal &&
        createPortal(
          <ModalEditCard
            closeEditModal={() => setShowEditCardModal(!showEditCardModal)}
            title={cardContent.title}
            flair={cardContent.flair}
            color={cardContent.color}
            accent={cardContent.accentColor}
            content={cardContent.content}
            id={cardContent.id}
            onData={updateCard}
          />,
          document.body
        )}
    </div>
  )
}
