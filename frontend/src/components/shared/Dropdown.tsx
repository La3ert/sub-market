import { useState, useRef, useEffect, type ReactNode } from 'react';

interface DropdownProps {
    trigger: (isOpen: boolean) => ReactNode;
    children: ReactNode;
    align?: 'left' | 'right' | 'center';
}

function Dropdown({ trigger, children, align = 'right' }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <div
                className="dropdown__trigger"
                onClick={() => setIsOpen(!isOpen)}
            >
                {trigger(isOpen)}
            </div>

            {isOpen && (
                <div className={`dropdown__menu dropdown__menu--${align}`}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default Dropdown;