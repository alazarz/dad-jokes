import { ReactNode } from 'react'

export interface IModalProps {
    isOpen: boolean,
    content: string,
    onClose: () => void
}

export interface IPageProps {
    title: string;
    children: ReactNode;
}

export interface IJoke {
    body: string,
    category: string,
    id: number,
    rating: number
}
