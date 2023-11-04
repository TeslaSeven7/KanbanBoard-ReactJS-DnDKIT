import { useEffect, useState } from 'react';
import PlusIcon from '../icons/PlusIcon';
import DragIcon from '../icons/DragIcon';
import DeleteIcon from '../icons/DeleteIcon';
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
							<div
								key={column.id}
								className='min-h-[550px] min-w-[350px] max-w-[350px]'>
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
								<button className=' mb-4 flex items-center justify-center bg-white text-blue-500 rounded-md border border-zinc-300 w-full py-3 font-semibold ring-blue-300 hover:ring-1 transition hover:border-blue-300'>
									<PlusIcon />
									<span className='ms-3'>Add New Task</span>
								</button>
								<div className='bg-white border border-zinc-300 p-6 rounded-md overflow-x-hidden'>
									<div className='flex items-center justify-between'>
										<span className='bg-orange-100 px-3 py-1 text-orange-500 border-orange-200 rounded-full font-semibold border '>
											UX stages
										</span>
										<button className='cursor-grab'>
											<DragIcon />
										</button>
									</div>
									<h2 className='font-semibold text-start mt-5 mb-2 text-xl'>
										Wireframing
									</h2>
									<textarea
										name='cardDescription'
										cols='30'
										rows='3'
										spellcheck='false'
										className='w-full focus:outline-none scrollbar resize-none'
										placeholder='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae a at sint dolorem perspiciatis nam aut! Ea maiores nulla quam unde blanditiis rem natus fugiat laborum reprehenderit dolorem, repellat porro.'></textarea>

									<p className='text-start text-gray-500 mb-5'></p>
									<div className='relative'>
										<div className='absolute h-[1px] w-[120%] -left-7 right-0 bg-zinc-300'></div>
										<div className='pt-5 flex justify-between items-center'>
											<div className=''></div>
											<button>
												<DeleteIcon />
											</button>
										</div>
									</div>
								</div>
							</div>
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
