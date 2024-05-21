import React, { useState, ChangeEvent } from 'react';
import './search-panel.css';

interface SearchPanelProps {
    onUpdateSearch: (term: string) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onUpdateSearch }) => {
    const [term, setTerm] = useState<string>('');

    const handleUpdateSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const newTerm = e.target.value;
        setTerm(newTerm);
        onUpdateSearch(newTerm);
    };

    return (
        <input
            type="text"
            className="form-control search-input"
            placeholder="Find a worker"
            value={term}
            onChange={handleUpdateSearch}
        />
    );
};

export default SearchPanel;
