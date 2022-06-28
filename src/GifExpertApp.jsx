import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['Chikorita']);
	const [lowerCaseCategories, setLowerCaseCategories] = useState(['chikorita']);

	const onAddCategory = (newCategory) => {
		const lowerCaseCategory = newCategory.toLowerCase();
		if (lowerCaseCategories.indexOf(lowerCaseCategory) == -1) {
			setLowerCaseCategories([lowerCaseCategory, ...lowerCaseCategories]);
			setCategories([newCategory, ...categories]);
		} else console.log('Categoria ya agregada');
	};

	return (
		<>
			<h1>Gif App</h1>

			<AddCategory onNewCategory={onAddCategory} />

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
