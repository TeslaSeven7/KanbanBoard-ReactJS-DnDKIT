import { useState, useRef, useEffect } from 'react';
import CrossIcon from '../icons/CrossIcon';
import PlusIcon from '../icons/PlusIcon';
export default function ModalCard({ closeModal, onData }) {
	const [cardForm, setCardForm] = useState();
	const cardTitle = useRef();
	const cardFlair = useRef();
	const [cardColor, setCardColor] = useState('#ef4444');
	const cardContent = useRef();

	const [inputValues, setInputValues] = useState({
		id: generateId(),
		title: '',
		flair: '',
		color: '',
		content: '',
	});
	function sendFormData() {
		if (inputValues === undefined) {
		} else {
			console.log(cardColor);

			inputValues.color = cardColor;
			inputValues.accentColor = cardColor + '24';
			console.log(inputValues);
			const isObjectEmpty = (inputValues) => {
				for (const key in inputValues) {
					if (inputValues[key] === '') {
						return true;
					}
				}
				return false;
			};

			if (isObjectEmpty(inputValues)) {
				console.log(
					'At least one property in inputValues is empty. Performing the action...'
				);
			} else {
				onData(inputValues);
				closeModal();
			}
		}
	}
	const handleInputChange = (inputName, e) => {
		const formChecks = { title: [0, 25], flair: [0, 20], content: [0, 400] };
		formChecks[inputName][0] = e.target.value.length;

		if (formChecks[inputName][0] > formChecks[inputName][1]) {
			e.target.value = e.target.value.slice(0, formChecks[inputName][1]);
		}
		setInputValues({
			...inputValues,
			[inputName]: e.target.value,
		});
	};

	function generateId() {
		return Math.floor(Math.random() * 10001);
	}
	return (
		<div
			onClick={closeModal}
			className='fixed top-0 bg-white bg-opacity-75 h-full w-full flex items-center justify-center z-10'>
			<div
				onClick={(e) => e.stopPropagation()}
				className='relative bg-white rounded-md border border-zinc-300 px-6 py-8 w-[450px] shadow-sm'>
				<button
					className='absolute top-5 right-5'
					onClick={closeModal}>
					<CrossIcon />
				</button>
				<div className='flex items-center justify-between mb-10 mt-7'>
					<h2 className='text-2xl font-semibold'>Create a new Task</h2>
				</div>
				<div className='flex flex-col mb-5'>
					<label
						htmlFor=''
						className='text-gray-500'>
						Title
					</label>
					<input
						name='title'
						value={inputValues.title}
						onChange={(e) => handleInputChange('title', e)}
						ref={cardTitle}
						type='text'
						className='focus:outline-none px-3 py-2 text-md border border-zinc-300 focus:border-blue-500 font-semibold transition rounded-md'
					/>
				</div>
				<div className='flex flex-col mb-5'>
					<label
						htmlFor=''
						className='text-gray-500'>
						Flair
					</label>
					<input
						name='flair'
						value={inputValues.flair}
						onChange={(e) => handleInputChange('flair', e)}
						ref={cardFlair}
						type='text'
						className='focus:outline-none px-3 py-2 text-md border border-zinc-300 focus:border-blue-500 font-semibold transition rounded-md'
					/>
				</div>
				<div className='flex flex-row mb-5'>
					<input
						checked
						type='radio'
						name='color'
						onChange={() => setCardColor('#ef4444')}
					/>
					<input
						type='radio'
						name='color'
						onChange={() => setCardColor('#f97316')}
					/>
					<input
						type='radio'
						name='color'
						onChange={() => setCardColor('#84cc16')}
					/>
					<input
						type='radio'
						name='color'
						onChange={() => setCardColor('#0ea5e9')}
					/>
				</div>
				<div className='flex flex-col mb-5'>
					<label
						htmlFor=''
						className='text-gray-500'>
						Content
					</label>
					<textarea
						name='content'
						value={inputValues.content}
						onChange={(e) => handleInputChange('content', e)}
						ref={cardContent}
						cols='30'
						rows='10'
						className='focus:outline-none px-3 py-2 text-md border border-zinc-300 focus:border-blue-500 font-semibold transition rounded-md'></textarea>
				</div>
				<div className='flex justify-center w-full'>
					<button
						onClick={sendFormData}
						className='flex items-center justify-center h-[50px] w-[200px] min-w-[200px] text-zinc-100 bg-blue-500 rounded-md border border-blue-600 p-4 font-semibold ring-blue-300 hover:ring-1 transition'>
						<PlusIcon />
						<span className='ms-3'>Add Column</span>
					</button>
				</div>
			</div>
		</div>
	);
}
