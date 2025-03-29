// Обновлённый хук useOutsideClick
import { RefObject, useEffect, useRef } from 'react';

type ClickHandler = (event: MouseEvent) => void;

const useOutsideClick = <T extends HTMLElement>(
    onClose: () => void
): RefObject<T | null> => { // Изменение типа возвращаемого значения
    const ref = useRef<T | null>(null); // Явное указание типа с null

    useEffect(() => {
        const handleClick: ClickHandler = (event) => {
            if (
                ref.current &&
                !ref.current.contains(event.target as Node) &&
                document.contains(event.target as Node)
            ) {
                onClose();
                console.log('click')
            }
        };

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [onClose]);

    return ref;
};

export default useOutsideClick;
