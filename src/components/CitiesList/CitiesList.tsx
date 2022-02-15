import styles from './citiesList.module.css';

export interface ICity {
	id: string;
}

export interface ICitiesList {
	cities: ICity[];
	handleCityClick: (id: string) => void;
}

const CitiesList = ({cities, handleCityClick}: ICitiesList) => (
    <>
        {cities.map((city: any, index: any) => (
            <div 
                className={styles.item}
                key={city.id} 
                onClick={() => handleCityClick(city.id)}
            >
                <span>{++index}. {city.id}</span>
            </div>
        ))}
    </>
);

export default CitiesList;
