import React, { useState } from 'react';
import DragIcon from '../icons/DragIcon';
import PlusIcon from '../icons/PlusIcon';
import CardContainer from './CardContainer';
import ModalCard from './ModalCard';
import generateId from '../utils/generateID';
import { createPortal } from 'react-dom';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import isEmpty from '../utils/isEmpty';
export default function ColumnContainer({
	column,
	deleteCol,
	id,
	updateColumn,
	placeCards,
	cardData,
}) {
	const [showCardModal, setShowCardModal] = useState(false);
	const [cards, setCards] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const {
		setNodeRef,
		attributes,
		listeners,
		transform,
		transition,
		isDragging,
	} = useSortable({
		id: column.id,
		data: {
			type: 'Column',
			column,
			cards,
		},
		disabled: editMode,
	});
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
	const style = { transform: CSS.Transform.toString(transform), transition };
	if (isDragging) {
		return (
			<div
				className='min-h-[550px] min-w-[350px] max-w-[350px] bg-slate-200 opacity-40 rounded-md border border-blue-500'
				ref={setNodeRef}
				style={style}></div>
		);
	}
	const generateNewCard = (data) => {
		setCards([...cards, data]);

		placeCards(data, id);
	};
	function unFocus(e) {
		if (e.key === 'Enter') {
			setEditMode(false);
		} else {
			return;
		}
	}
	for (const objectKey in cardData) {
		console.log(`Object Key: ${objectKey}`);
		const subObject = cardData[objectKey];
		for (const prop in subObject) {
			console.log(`Property: ${prop}, Value: ${subObject[prop]}`);
		}
	}

	return (
		<>
			<div
				ref={setNodeRef}
				style={style}
				className='min-h-[550px] min-w-[350px] max-w-[350px]'>
				<div className='flex items-center justify-between mb-6'>
					<div
						className='flex items-center'
						onClick={() => setEditMode(true)}>
						<span
							className='flex h-2.5 w-2.5 rounded-full me-2'
							style={{ backgroundColor: column.titleFlair }}></span>
						{!editMode ? (
							<span className='font-bold py-1 px-2   border border-transparent'>
								{column.title}
							</span>
						) : (
							<input
								value={column.title}
								autoFocus
								onBlur={() => setEditMode(false)}
								onChange={(e) => updateColumn(column.id, e.target.value)}
								onKeyDown={(e) => unFocus(e)}
								className='w-[150px] focus:outline-none px-2 py-1 text-md border border-zinc-300 focus:border-blue-500 font-bold transition rounded-md'
							/>
						)}

						<div className='px-4 bg-white rounded-full ms-4'>
							{cards.length}
						</div>
					</div>
					<div
						className='flex justify-between'
						onClick={(e) => e.stopPropagation}>
						<button onClick={() => deleteCol(id)}>Del</button>
						<button
							className='cursor-grab'
							{...attributes}
							{...listeners}>
							<DragIcon />
						</button>
					</div>
				</div>
				<button
					onClick={() => setShowCardModal(!showCardModal)}
					className=' mb-4 flex items-center justify-center bg-white text-blue-500 rounded-md border border-blue-500 w-full py-3 font-semibold ring-blue-300 hover:ring-1 transition hover:border-blue-300'>
					<PlusIcon />
					<span className='ms-3'>Add New Task</span>
				</button>
				{cards.map((card) => {
					return (
						<CardContainer
							key={card.id}
							title={card.title}
							flair={card.flair}
							color={card.color}
							accent={card.accentColor}
							content={card.content}
						/>
					);
				})}
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
	);
}
