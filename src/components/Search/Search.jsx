import { HiSearch } from "react-icons/hi";
import './Search.scss';

export default function Search({word, setIWord}){

    const handleChange = (e) =>{
        setIWord(e.target.value)
    }

    return(
        <div className="search">
            <input
                className="search__placeholder"
                placeholder='What are you looking for?'
                onChange={handleChange}
            />
            <div  className="search__icon">
                <HiSearch />
            </div>
        </div>
    )
}