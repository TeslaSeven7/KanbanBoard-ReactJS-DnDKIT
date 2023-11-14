import React, { useState, useEffect } from 'react'
import DragIcon from '../assets/icons/DragIcon'
import PlusIcon from '../assets/icons/PlusIcon'
import DeleteIcon from '../assets/icons/DeleteIcon'
import CardContainer from './CardContainer'
import ModalCard from './modals/ModalCard'
import generateId from '../utils/generateID'
import { createPortal } from 'react-dom'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import isEmpty from '../utils/isEmpty'
export default function ColumnContainer({
  column,
  deleteCol,
  id,
  updateColumn,
  placeCards,
  cardData,
  updateCards
}) {
  useEffect(() => {
    if (cards.length != 0) {
      console.log(cards[0].accentColor)
    }
  })
  const [showCardModal, setShowCardModal] = useState(false)
  const [cards, setCards] = useState([])
  // const [cards, setCards] = useState([
  // 	{
  // 		id: generateId(),
  // 		title: 'Placeholder Title',
  // 		flair: 'UX design',
  // 		color: '#f97316',
  // 		accentColor: '#f9731624',
  // 		content: '',
  // 	},
  // ]);
  const [editMode, setEditMode] = useState(false)
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
      cards
    },
    disabled: editMode
  })
  const style = { transform: CSS.Transform.toString(transform), transition }
  if (isDragging) {
    return (
      <div
        className="min-h-[550px] min-w-[300px] max-w-[300px] rounded-md border border-blue-500 bg-slate-200 opacity-40"
        ref={setNodeRef}
        style={style}
      ></div>
    )
  }
  const generateNewCard = (data) => {
    setCards((prevCards) => [...prevCards, data])
    placeCards(data, id)
  }
  function unFocus(e) {
    if (e.key === 'Enter') {
      setEditMode(false)
    } else {
      return
    }
  }
  function deleteCard(id) {
    const filteredCard = cards.filter((card) => card.id !== id)
    setCards(filteredCard)
  }

  function updateCard(newCard) {
    setCards((prevCards) => {
      const updatedCards = prevCards.map((card) =>
        card.id === newCard.id ? newCard : card
      )
      updateCards(updatedCards, column.id)
      return updatedCards
    })
  }

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className="min-h-[550px] min-w-[300px] max-w-[300px]"
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center" onClick={() => setEditMode(true)}>
            <span
              className="me-2 flex h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: column.titleFlair }}
            ></span>
            {!editMode ? (
              <span className="border border-transparent px-2   py-1 font-bold">
                {column.title}
              </span>
            ) : (
              <input
                value={column.title}
                autoFocus
                onBlur={() => setEditMode(false)}
                onChange={(e) => updateColumn(column.id, e.target.value)}
                onKeyDown={(e) => unFocus(e)}
                className="text-md w-[150px] rounded-md border border-zinc-300 px-2 py-1 font-bold transition focus:border-blue-500 focus:outline-none"
              />
            )}
          </div>
          <div
            className="flex justify-between"
            onClick={(e) => e.stopPropagation}
          >
            <div className="me-3 rounded-full bg-white  px-4 ">
              {cardData && cardData.length > 0 ? cardData.length : cards.length}
            </div>
            <button className="me-3" onClick={() => deleteCol(id)}>
              <DeleteIcon color={'#444447'} />
            </button>
            <button className="cursor-grab" {...attributes} {...listeners}>
              <DragIcon />
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowCardModal(!showCardModal)}
          className=" mb-4 flex  w-full items-center justify-center rounded-md border border-blue-500 bg-white py-3 font-semibold text-blue-500 ring-blue-300 transition hover:ring-1 "
        >
          <PlusIcon />
          <span className="ms-3">Add new task</span>
        </button>
        {cardData && cardData.length > 0
          ? cardData.map((card) => (
              <CardContainer
                key={card.id}
                id={card.id}
                title={card.title}
                flair={card.flair}
                color={card.color}
                accentColor={card.accentColor}
                content={card.content}
                delCard={deleteCard}
                updCard={updateCard}
              />
            ))
          : cards.map((card) => (
              <CardContainer
                id={card.id}
                key={card.id}
                title={card.title}
                flair={card.flair}
                color={card.color}
                accentColor={card.accentColor}
                content={card.content}
                delCard={deleteCard}
                updCard={updateCard}
              />
            ))}
      </div>
      {showCardModal &&
        createPortal(
          <ModalCard
            closeModal={() => setShowCardModal(!showCardModal)}
            onData={generateNewCard}
          />,
          document.body
        )}
    </>
  )
}
