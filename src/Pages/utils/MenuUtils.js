import { useEffect, useState } from "react";

export function useSearching(query, checkedCategories) {
    const [results, setResults] = useState([]);
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [debouncedCategories, setDebouncedCategories] = useState(checkedCategories);

    // Debounce input
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
            setDebouncedCategories(checkedCategories);
        }, 300);

        return () => clearTimeout(handler);
    }, [query, checkedCategories]);

    // Fetch when debounced values change
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8000/searchQuery.php?q=${encodeURIComponent(debouncedQuery)}&categories=${encodeURIComponent(JSON.stringify(debouncedCategories))}`
                );
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error("Fetch error:", error);
                setResults([]);
            }
        };

        // Don't skip fetching when query is empty — allow category-only filtering
        fetchData();
    }, [debouncedQuery, debouncedCategories]);

    return results;
}
