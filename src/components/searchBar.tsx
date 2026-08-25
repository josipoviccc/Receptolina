type SearchBarProps = {
    onSearch: (searchText: string) => void; //onSearch funkcija koja prima argument koji je tipa string i ne vraća ništa
};

export default function SearchBar({ onSearch }: SearchBarProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value); //što se treba proslijediti u HomePage da bi se filtrirali recepti
    };
    return (
        <div className="search-bar">
            <input 
                className="search-input"
                type="text"
                placeholder="Pretraži recepte..."
                onChange={handleChange}
            />
        </div>
    );
};
