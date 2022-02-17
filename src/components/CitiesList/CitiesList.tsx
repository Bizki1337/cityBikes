import cn from 'classnames';

import styles from './citiesList.module.css';

interface ICity {
    company: string[];
	id: string;
}

interface ICitiesList {
    activeCity: string;
	cities: ICity[];
	handleCityClick: (id: string) => void;
}

const CitiesList = ({
    activeCity,
    cities, 
    handleCityClick
}: ICitiesList) => (
    <>
        {cities.map((city: ICity, index: number) => (
            <div 
                key={city.id} 
                onClick={() => handleCityClick(city.id)}
                className={cn(
                    [styles.item],
                    {[styles.activeItem]: activeCity === city.id}, 
                )}
            >
                <span>{++index}. {city.id}</span>
            </div>
        ))}
    </>
);

export default CitiesList;
