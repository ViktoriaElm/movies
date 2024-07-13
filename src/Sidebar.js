import './styles/Sidebar.css';
import PaginatedItems from './Pagination';
import { useEffect, useState } from 'react';

const API = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjQ3NDdjNmE1OGIxNjBiY2Y4NGMxYzM2OTZhMzVlYyIsIm5iZiI6MTcyMDg1Mzc3MC4zODE1NzcsInN1YiI6IjY2OTBjNWIyOTEwNmUxNjdkNDhiMzY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0MK2TMaOs79X8Zu4Fzhr-dfSI2eB-3X97cvo1KQYPm0"

function Select({ title, options }) {
    return (
        <>
            <span className='Sidebar-span'>{title}</span>
            <select className={"movie-select"}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}

export default function Sidebar() {
    const [genres, setGenres] = useState([])

    const sortOptions = [
        { value: "Popularity", label: "Популярные по убыванию" },
        { value: "Rating", label: "Рейтингу" },
        { value: "Name", label: "Названию" },
    ];

    const yearOptions = [
        { value: "Year24", label: "2024" },
        { value: "Year23", label: "2023" },
        { value: "Year22", label: "2022" },
    ];

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API}`
            }
        };

        fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options)
            .then(response => response.json())
            .then(data => {
                const genresList = data.genres.map(genre => ({
                    value: genre.id,
                    label: genre.name
                }));
                setGenres(genresList);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <div
                className={'Sidebar-container'}>
                <div
                    className={'Sidebar-title-box'}>
                    <h3
                        className={'Sidebar-title'}>Фильтры</h3>
                    <span>X</span>
                </div>

                <Select title="Сортировать по:" options={sortOptions} />

                <Select title="Год по убыванию:" options={yearOptions} />

                <div
                    className={'genre-box'}>
                    <h3 className={'Sidebar-title'}>Жанры</h3>
                    <div
                        className={'element'}>
                        {genres.map((genre, index) => (
                            <div key={index} className={'checkbox-box'}>
                                <input type="checkbox" id={`genre-${genre.value}`} name={genre.label} />
                                <label for={`genre-${genre.value}`}>{genre.label}</label>
                            </div>
                        ))}
                    </div>


                </div>
                <div id="container">
                    <PaginatedItems
                        itemsPerPage={3} />
                </div>
            </div>
        </>
    )
}