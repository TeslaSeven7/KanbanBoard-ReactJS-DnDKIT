import React, { useState } from 'react';
import DragIcon from '../icons/DragIcon';
import PlusIcon from '../icons/PlusIcon';
import CardContainer from './CardContainer';
export default function ColumnContainer({ column }) {
	const [cards, setCards] = useState([
		{
			id: generateId(),
			title: 'Placeholder Title',
			flair: 'UX design',
			flairColor: '#f43f5e',
		},
	]);
	function createNewCards() {
		const cardToAdd = {
			id: generateId(),
			title: `Column ${cards.length + 1}`,
		};
		setCards([...cards, cardToAdd]);
		console.log(cards);
	}

	function generateId() {
		return Math.floor(Math.random() * 10001);
	}
	return (
		<div className='min-h-[550px] min-w-[350px] max-w-[350px]'>
			<div className='flex items-center justify-between mb-6'>
				<div className='flex items-center'>
					<span
						className='flex h-2.5 w-2.5 rounded-full me-2'
						style={{ backgroundColor: column.titleFlair }}></span>
					<span className='font-bold'>{column.title}</span>
					<div className='px-4 bg-white rounded-full ms-4'>3</div>
				</div>
				<button className='cursor-grab'>
					<DragIcon />
				</button>
			</div>
			<button
				onClick={createNewCards}
				className=' mb-4 flex items-center justify-center bg-white text-blue-500 rounded-md border border-zinc-300 w-full py-3 font-semibold ring-blue-300 hover:ring-1 transition hover:border-blue-300'>
				<PlusIcon />
				<span className='ms-3'>Add New Task</span>
			</button>
			{cards.map((card) => {
				return (
					<CardContainer
						key={card.id}
						title={card.title}
					/>
				);
			})}
		</div>
	);
}
