import { useState } from "react";

type SearchBarProps = {
    onSearch: (searchText: string) => void; //onSearch funkcija koja prima argument koji je tipa string i ne vraća ništa
};

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onSearch(e.target.value);
    };
    return (
        <div className="search-bar">
            <input 
                className="search-input"
                type="text"
                placeholder="Pretraži recepte..."
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};
