import supabase, { supabaseUrl } from './supabase';

export async function getCabins() {
	let { data, error } = await supabase.from('cabins').select('*');

	if (error) {
		console.log(error.message);
		throw new Error("cabins can't be loaded");
	}
	return data;
}

export async function deleteCabins(id) {
	const { error, data } = await supabase.from('cabins').delete().eq('id', id);
	if (error) {
		console.log(error.message);
		throw new Error("cabins can't be deleted");
	}

	return data;
}
export async function createCabin(cabin, id) {
	console.log('create cabin', cabin, id);
	const hasImagePath = cabin.cabinImage?.startsWith?.(supabaseUrl);

	const cabinNameImage = `${Math.random()}-${cabin.cabinImage?.name?.replaceAll(
		'/',
		''
	)}`;
	const cabinImagePath = hasImagePath
		? cabin.cabinImage
		: `${supabaseUrl}/storage/v1/object/public/cabinImages/${cabinNameImage}`;
	let baseQuery = supabase.from('cabins');
	if (!id) {
		baseQuery = baseQuery.insert([{ ...cabin, cabinImage: cabinImagePath }]);
	}
	if (id) {
		baseQuery = baseQuery
			.update({ ...cabin, cabinImage: cabinImagePath })
			.eq('id', id);
	}

	const { data, error } = await baseQuery.select().single();

	if (error) {
		console.log('can not add new cabins');
		throw new Error(error.message);
	}

	if (hasImagePath) return data;

	const { error: cabinErrorFile } = await supabase.storage
		.from('cabinImages')
		.upload(cabinNameImage, cabin.cabinImage);
	if (cabinErrorFile) {
		await supabase.from('cabins').delete().eq('id', data.id);
		console.log(cabinErrorFile);
		throw new Error('error occured while uploading image');
	}
	return data;
}
