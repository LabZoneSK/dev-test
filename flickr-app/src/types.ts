export interface Photo {
    farm: number;
    server: number;
    owner: string;
    id: number;
    secret: string;
    title: string;
    description: { _content: string };
}

export interface SearchText {
    searchText: string;
}

export interface CardListProps {
    columnsPerRow?: number;
}