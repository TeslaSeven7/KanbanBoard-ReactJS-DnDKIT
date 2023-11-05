import React, { useState } from 'react';
import DragIcon from '../icons/DragIcon';
import PlusIcon from '../icons/PlusIcon';
import CardContainer from './CardContainer';
import { createPortal } from 'react-dom';
import ModalCard from './ModalCard';
export default function ColumnContainer({ column }) {
	const [showCardModal, setShowCardModal] = useState(false);
	const [cards, setCards] = useState([
		{
			id: generateId(),
			title: 'Placeholder Title',
			flair: 'UX design',
			color: '#f97316',
			accentColor: '#f9731624',
			content: '',
		},
	]);

	function generateId() {
		return Math.floor(Math.random() * 10001);
	}
	const generateNewCard = (data) => {
		console.log(data);
		setCards([...cards, data]);
	};
	return (
		<>
			<div className='min-h-[550px] min-w-[350px] max-w-[350px]'>
				<div className='flex items-center justify-between mb-6'>
					<div className='flex items-center'>
						<span
							className='flex h-2.5 w-2.5 rounded-full me-2'
							style={{ backgroundColor: column.titleFlair }}></span>
						<span className='font-bold'>{column.title}</span>
						<div className='px-4 bg-white rounded-full ms-4'>
							{cards.length}
						</div>
					</div>
					<button className='cursor-grab'>
						<DragIcon />
					</button>
				</div>
				<button
					//onClick={createNewCards}
					onClick={() => setShowCardModal(!showCardModal)}
					className=' mb-4 flex items-center justify-center bg-white text-blue-500 rounded-md border border-zinc-300 w-full py-3 font-semibold ring-blue-300 hover:ring-1 transition hover:border-blue-300'>
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
