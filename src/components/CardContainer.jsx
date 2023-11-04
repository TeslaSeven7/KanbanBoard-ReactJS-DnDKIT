import React, { useState } from 'react';
import DeleteIcon from '../icons/DeleteIcon';
import DragIcon from '../icons/DragIcon';
import { createPortal } from 'react-dom';
export default function CardContainer({ title }) {
	const [showModal, setShowModal] = useState(false);
	function autoGrowTextarea(event) {
		const textarea = event.target;
		textarea.style.height = '5px';
		textarea.style.height = textarea.scrollHeight + 'px';
		if (textarea.value === '') {
			textarea.style.height = '73px';
		}
	}
	return (
		<>
			<div className='bg-white border border-zinc-300 p-6 rounded-md overflow-x-hidden mb-5'>
				<div className='flex items-center justify-between'>
					<span className='bg-orange-100 px-3 py-1 text-orange-500 border-orange-200 rounded-full font-semibold border '>
						UX stages
					</span>
					<button className='cursor-grab'>
						<DragIcon />
					</button>
				</div>
				<input
					type='text'
					className='w-full font-semibold text-start mt-5 mb-2 text-xl focus:outline-none text-gray-800'
					placeholder='Wireframing'
					value={title}
				/>

				<textarea
					name='cardDescription'
					cols='30'
					rows='3'
					spellCheck='false'
					onInput={(e) => autoGrowTextarea(e)}
					className='w-full focus:outline-none scrollbar resize-none text-gray-500'
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
			{showModal &&
				createPortal(
					<ModalCard closeModal={() => setShowModal(!showModal)} />,
					document.body
				)}
		</>
	);
}
