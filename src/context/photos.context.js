import {useState, createContext} from "react";

export const PhotosContext = createContext('');

export function PhotoProvider({children}) {
    const [photos, setPhotos] = useState(null);

    const changePhotos = (val) => setPhotos(val)

    return (
        <PhotosContext.Provider value={{photos, changePhotos}}>
            {children}
        </PhotosContext.Provider>
    )
}
