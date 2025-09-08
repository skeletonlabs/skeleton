import { ListCollection, type CollectionItem, type CollectionOptions } from '@zag-js/collection';

export function useListCollection<T extends CollectionItem = CollectionItem>(options: CollectionOptions<T>) {
	return new ListCollection(options);
}
