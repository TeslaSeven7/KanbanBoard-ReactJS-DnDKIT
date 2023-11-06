import { useState, useRef, useEffect } from 'react';
import CrossIcon from '../icons/CrossIcon';
import PlusIcon from '../icons/PlusIcon';
import generateId from '../utils/generateID';
export default function ModalCard({ closeModal, onData }) {
	const [cardForm, setCardForm] = useState();
	const cardTitle = useRef();
	const cardFlair = useRef();
	const [cardColor, setCardColor] = useState('#ef4444');
	const cardContent = useRef();
	const [formChecks, setFormChecks] = useState({
		title: [0, 25],
		flair: [0, 20],
		content: [0, 400],
	});
	const [inputValues, setInputValues] = useState({
		id: generateId(),
		title: '',
		flair: '',
		color: '',
		accentColor: '',
		content: '',
	});
	function sendFormData() {
		if (inputValues === undefined) {
		} else {
			inputValues.color = cardColor;
			inputValues.accentColor = cardColor + '24';
			const isObjectEmpty = (inputValues) => {
				for (const key in inputValues) {
					if (inputValues[key] === '') {
						return true;
					}
				}
				return false;
			};

			if (isObjectEmpty(inputValues)) {
				console.log('DO SOMETHING');
			} else {
				onData(inputValues);
				closeModal();
			}
		}
	}
	const errorHandler = () => {
		return true;
	};
	const handleInputChange = (inputName, e) => {
		formChecks[inputName][0] = e.target.value.length;
		if (formChecks[inputName][0] > formChecks[inputName][1]) {
			errorHandler(e, 'charLong');
			e.target.value = e.target.value.slice(0, formChecks[inputName][1]);
			e.target.style.borderColor = 'red';
		} else {
			e.target.style.borderColor = '#3b85f1';
		}
		setInputValues({
			...inputValues,
			[inputName]: e.target.value,
		});
	};
	useEffect(() => {}, [formChecks]);
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
					<div className='flex items-center justify-between'>
						<label
							htmlFor=''
							className='text-gray-500'>
							Title
						</label>
						<span className='text-gray-500 text-sm'>
							{formChecks.title[0] + '/' + formChecks.title[1]}
						</span>
					</div>
					<input
						name='title'
						value={inputValues.title}
						onChange={(e) => handleInputChange('title', e)}
						ref={cardTitle}
						type='text'
						className='focus:outline-none px-3 py-2 text-md border border-zinc-300 focus:border-blue-500 font-semibold transition rounded-md'
					/>
				</div>
				<div className='flex flex-col mb-2'>
					<div className='flex items-center justify-between'>
						<label
							htmlFor=''
							className='text-gray-500'>
							Flair
						</label>
						<span className='text-gray-500 text-sm'>
							{formChecks.flair[0] + '/' + formChecks.flair[1]}
						</span>
					</div>
					<input
						name='flair'
						value={inputValues.flair}
						onChange={(e) => handleInputChange('flair', e)}
						ref={cardFlair}
						type='text'
						className='focus:outline-none px-3 py-2 text-md border border-zinc-300 focus:border-blue-500 font-semibold transition rounded-md'
					/>
				</div>
				<div className='flex flex-row justify-between mb-5'>
					<input
						className='flairs'
						type='radio'
						name='color'
						id='red'
						checked={cardColor === '#ef4444'}
						onChange={() => setCardColor('#ef4444')}
					/>
					<label
						className='cursor-pointer'
						htmlFor='red'>
						Red
					</label>
					<input
						className='flairs'
						type='radio'
						name='color'
						id='orange'
						checked={cardColor === '#f97316'}
						onChange={() => setCardColor('#f97316')}
					/>
					<label
						className='cursor-pointer'
						htmlFor='orange'>
						Orange
					</label>
					<input
						className='flairs'
						type='radio'
						name='color'
						id='green'
						checked={cardColor === '#84cc16'}
						onChange={() => setCardColor('#84cc16')}
					/>
					<label
						className='flairs cursor-pointer'
						htmlFor='green'>
						Green
					</label>
					<input
						className='flairs'
						type='radio'
						name='color'
						id='blue'
						checked={cardColor === '#0ea5e9'}
						onChange={() => setCardColor('#0ea5e9')}
					/>
					<label
						className='flairs cursor-pointer'
						htmlFor='blue'>
						Blue
					</label>
					<input
						className='flairs'
						type='radio'
						name='color'
						id='purple'
						checked={cardColor === '#a855f7'}
						onChange={() => setCardColor('#a855f7')}
					/>
					<label
						className='flairs cursor-pointer'
						htmlFor='purple'>
						Purple
					</label>

					<input
						className='flairs'
						type='radio'
						name='color'
						id='pink'
						checked={cardColor === '#ec4899'}
						onChange={() => setCardColor('#ec4899')}
					/>
					<label
						className='flairs cursor-pointer'
						htmlFor='pink'>
						Pink
					</label>
				</div>
				<div className='flex flex-col mb-5'>
					<div className='flex items-center justify-between'>
						<label
							htmlFor=''
							className='text-gray-500'>
							Content
						</label>
						<span className='text-gray-500 text-sm'>
							{formChecks.content[0] + '/' + formChecks.content[1]}
						</span>
					</div>
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
