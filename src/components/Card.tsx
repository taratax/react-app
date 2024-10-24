import { PropsWithChildren } from 'react'; // 


interface CardProps {
    bg?: string,
    shadowColor?: string
}

export const Card = ({ children, bg = 'bg-gray-100' }: PropsWithChildren<CardProps>) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    )
};