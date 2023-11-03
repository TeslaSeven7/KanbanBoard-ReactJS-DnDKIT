import { useState } from 'react';
import PlusIcon from '../icons/PlusIcon';
export default function () {
	const [columns, setColumns] = useState([]);
	console.log(columns);

	function createNewColumns() {
		const columnToAdd = {
			id: generateId(),
			title: `Column ${columns.length + 1}`,
		};
		setColumns([...columns, columnToAdd]);
	}

	function generateId() {
		return Math.floor(Math.random() * 10001);
	}
	return (
		<div className='m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden'>
			<div className='m-auto'>
				<div>
					{columns.map((column) => {
						return <div>{column.title}</div>;
					})}
				</div>
				<button
					onClick={createNewColumns}
					className='flex items-center justify-between h-[60px] w-[350px] min-w-[350px] cursor-pointer roudned-lg bg-gray-300 rounded-md p-4 ring-blue-300 hover:ring-2 transition'>
					Add Column
					<PlusIcon />
				</button>
			</div>
		</div>
	);
}
