import { useEffect, useState } from 'react';
import PlusIcon from '../icons/PlusIcon';

import { text } from '@fortawesome/fontawesome-svg-core';
import ColumnContainer from './ColumnContainer';
export default function () {
	const [columns, setColumns] = useState([]);
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
			'#f43f5e',
		];
		const index = Math.floor(Math.random() * color.length);
		const bgColor = color[index];
		const columnToAdd = {
			id: generateId(),
			title: `Column ${columns.length + 1}`,
			titleFlair: bgColor,
		};
		setColumns([...columns, columnToAdd]);
	}

	function generateId() {
		return Math.floor(Math.random() * 10001);
	}

	useEffect(() => {}, []);
	return (
		<div className='m-auto flex min-h-screen w-full items-center'>
			<div className='m-auto'>
				<div className='flex gap-[50px]'>
					{columns.map((column) => {
						return (
							<ColumnContainer
								key={column.id}
								column={column}
							/>
						);
					})}
				</div>
				<button
					onClick={createNewColumns}
					className='flex items-center justify-center h-[60px] w-[350px] min-w-[350px] text-zinc-100 bg-blue-500 rounded-md border border-blue-600 p-4 font-semibold ring-blue-300 hover:ring-1 transition'>
					<PlusIcon />
					<span className='ms-3'>Add Column</span>
				</button>
			</div>
		</div>
	);
}
