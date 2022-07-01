import {useState, createContext} from "react";

export const PhotosContext = createContext('');

export function PhotoProvider({children}) {
    const [tag, setTag] = useState(null);

    const changeTag = (val) => setTag(val)

    return (
        <PhotosContext.Provider value={{tag, changeTag}}>
            {children}
        </PhotosContext.Provider>
    )
}
