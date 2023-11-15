import { useEffect, useState, useMemo } from 'react'
import PlusIcon from '../assets/icons/PlusIcon'
import { text } from '@fortawesome/fontawesome-svg-core'
import ColumnContainer from './ColumnContainer'
import generateId from '../utils/generateID'
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor
} from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { createPortal } from 'react-dom'
import isEmpty from '../utils/isEmpty'
export default function () {
  const [columns, setColumns] = useState([])
  const [columnsID, setColumnsID] = useState([])
  const [activeColumn, setActiveColumn] = useState()
  const [activeCardCol, setActiveCardCol] = useState()

  useEffect(() => {
    if (columns) {
      const updatedColumnsID = columns.map((col) => col.id)
      setColumnsID(updatedColumnsID)
    }
  }, [columns])
  function createNewColumns() {
    const color = [
      '#F05252',
      '#FACA15',
      '#0E9F6E',
      '#3F83F8',
      '#6875F5',
      '#9061F9',
      '#E74694',
      '#f59e0b',
      '#84cc16',
      '#10b981',
      '#14b8a6',
      '#06b6d4',
      '#0ea5e9',
      '#6366f1',
      '#d946ef',
      '#f43f5e',
      '#f43f5e'
    ]
    const index = Math.floor(Math.random() * color.length)
    const bgColor = color[index]
    const columnToAdd = {
      id: generateId(),
      title: `Todo ${columns.length + 1}`,
      titleFlair: bgColor,
      cards: {}
    }
    setColumns([...columns, columnToAdd])
  }
  function deleteColumn(id) {
    const filteredColumn = columns.filter((col) => col.id !== id)
    setColumns(filteredColumn)
  }
  function updateColumn(id, title) {
    const newColumns = columns.map((col) => {
      if (col.id === id) {
        return { ...col, title }
      } else {
        return col
      }
    })
    setColumns(newColumns)
  }
  function placeCardsInArray(cardsComp, colID) {
    console.log(cardsComp)

    const newColumnsCard = columns.map((col) => {
      if (col.id === colID) {
        return { ...col, cards: { ...col.cards, [generateId()]: cardsComp } }
      }
      return col
    })
    setColumns(newColumnsCard)
    return columns
  }
  function updateCardInArray(cards, columnID) {
    //console.log(cards);
  }
  function onDragStart(e) {
    if (e.active.data.current?.type === 'Column') {
      console.log(e.active.data.current.cards)
      setActiveColumn(e.active.data.current.column)
      setActiveCardCol(e.active.data.current.cards)
      return
    }
  }
  function onDragEnd(e) {
    const { active, over } = e

    if (!over) {
      return
    }
    const activeColumnID = active.id
    const overColumnID = over.id
    if (activeColumnID === overColumnID) {
      return
    } else {
      setColumns((columns) => {
        const activeColumnIndex = columns.findIndex(
          (col) => col.id === activeColumnID
        )
        const overColumnIndex = columns.findIndex(
          (col) => col.id === overColumnID
        )
        return arrayMove(columns, activeColumnIndex, overColumnIndex)
      })
    }
  }

  return (
    <>
      <div className="flex h-[80px] w-full items-center justify-between border-b-[1.5px] border-zinc-300 bg-white px-7 py-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-semibold">⌨️</h1>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Website development</h1>
            <div className="flex items-center">
              <div className="relative mt-2 h-[5px] w-[300px] rounded bg-zinc-200">
                <div
                  className="absolute left-0 top-0 h-full rounded bg-blue-400"
                  style={{ width: '30%' }}
                ></div>
              </div>
              <p className=" mb-0 ms-2 text-sm font-semibold text-gray-500">
                30% completed
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="me-5 flex items-center">
            <a
              href="#"
              className="relative left-9 z-0 flex h-9 w-9 items-end justify-start overflow-hidden rounded-full border-2 border-white bg-red-200 transition-all hover:left-8 "
            >
              <img
                src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Cuddles&face=awe,blank,calm,cute,eatingHappy,explaining,smile,smileBig,smileLOL,smileTeethGap,solemn,tired,driven"
                alt="avatar"
              />
            </a>
            <a
              href="#"
              className="z-1 relative left-6 flex h-9 w-9 items-end justify-center overflow-hidden rounded-full border-2 border-white bg-yellow-200 transition-all hover:left-5 "
            >
              <img
                src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Chester&face=awe,blank,calm,cheeky,cute,driven,eatingHappy,explaining,serious,smile,smileBig,smileLOL,smileTeethGap&head=afro,bangs,bangs2,bantuKnots,bear,buns,cornrows,cornrows2,dreads1,dreads2,flatTop,flatTopLong,grayBun,grayMedium,grayShort,hatBeanie,hatHip,hijab,long,longBangs,longCurly,medium1,medium2,medium3,mediumBangs,mediumBangs2,mediumBangs3,mediumStraight,mohawk,mohawk2,noHair1,noHair2,noHair3,pomp,shaved1,shaved2,shaved3,short1,short2,short3,short4,short5,turban,twists,twists2"
                alt="avatar"
              />
            </a>
            <a
              href="#"
              className="z-2 relative left-3 flex h-9 w-9 items-end justify-center overflow-hidden rounded-full border-2 border-white bg-green-200 transition-all hover:left-2 "
            >
              <img
                src="https://api.dicebear.com/7.x/open-peeps/svg?seed=Max&face=awe,blank,calm,cute,eatingHappy,explaining,smile,smileBig,smileLOL,smileTeethGap,solemn,tired,driven"
                alt="avatar"
              />
            </a>
            <div className="z-3 relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-blue-500 bg-blue-100">
              <PlusIcon color={'#3b85f1'} width={'h-2'} height={'w-2'} />
              <span className="flex text-sm font-semibold text-blue-500">
                3
              </span>
            </div>
          </div>
          <button
            onClick={createNewColumns}
            className="flex  items-center justify-center rounded-md border border-blue-600 bg-blue-500 px-2 py-2 font-semibold text-zinc-100 ring-blue-300 transition hover:ring-1"
          >
            <PlusIcon color={'currentColor'} width={'h-6'} height={'w-6'} />
            <span className="ms-3">Add column</span>
          </button>
        </div>
      </div>
      <div className="scrollbar m-auto flex max-h-[100vh] min-h-screen w-full items-start overflow-y-auto">
        <DndContext
          onDragStart={(e) => onDragStart(e)}
          onDragEnd={(e) => onDragEnd(e)}
        >
          <div className="m-10">
            <div className="grid grid-cols-4 gap-[50px] ">
              <SortableContext items={columnsID}>
                {columns.map((column) => {
                  return (
                    <ColumnContainer
                      key={column.id}
                      column={column}
                      id={column.id}
                      placeCards={placeCardsInArray}
                      deleteCol={deleteColumn}
                      updateColumn={updateColumn}
                      updateCards={updateCardInArray}
                    />
                  )
                })}
              </SortableContext>
            </div>
          </div>
          {createPortal(
            <DragOverlay>
              {activeColumn && (
                <ColumnContainer
                  placeCards={placeCardsInArray}
                  key={activeColumn.id}
                  id={activeColumn.id}
                  column={activeColumn}
                  deleteCol={deleteColumn}
                  cardData={activeCardCol}
                  updateColumn={updateColumn}
                  updateCards={updateCardInArray}
                />
              )}
            </DragOverlay>,
            document.body
          )}
        </DndContext>
      </div>
    </>
  )
}
