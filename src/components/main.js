import { useContext } from "react";
import { Context } from "./appContext";
import SearchBox from "./searchBox/searchBox";
import UploadFile from "./uploadFile";


const Main = () => {
    
    const { data } = useContext(Context)

    return (
        data.file 
            ? <SearchBox/>
            : <UploadFile/>
    )
}

export default Main;