import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCitiesPendingSelector,
  getCitiesSelector,
  getCitiesErrorSelector,
} from 'library/common/selectors/citiesSelectors';

import {
	getPickedNetworkSelector,
	getPickedNetworkPendingSelector,
	getPickedNetworErrorSelector
} from 'library/common/selectors/pickedNetworkSeletors';

import { fetchCitiesRequest } from 'library/common/actions/citiesActions';
import { fetchPickedNetworRequest } from 'library/common/actions/pickedNetworkActions';

import Header from 'components/Header/Header';

import CitiesList from 'components/CitiesList/CitiesList';
import NetworkStationsList from 'components/NetworkStationsList/NetworkStationsList';

import styles from 'App.module.css';

interface INetwork {
    company: [];
    href: string;
    id: string;
    location: object;
    name: string;
    stations: [];
}

const App = () => {

	const dispatch = useDispatch();

	const pending = useSelector(getCitiesPendingSelector);
	const cities = useSelector(getCitiesSelector);
	const error = useSelector(getCitiesErrorSelector);

	const pickedNetwork = useSelector(getPickedNetworkSelector);
	const pickedNetworkPending = useSelector(getPickedNetworkPendingSelector);
	const pickedNetworkError = useSelector(getPickedNetworErrorSelector);

	const [network, setNetwork] = useState<null | INetwork>(null);
	const [activeCityId, setActiveCityId] = useState<string>('');
	const [likedStations, setLikedStations] = useState<string[]>([]);

	useEffect(() => {
		dispatch(fetchCitiesRequest());
		const liked = JSON.parse(localStorage.getItem('citibykes-likedStaions') || '[]');
		setLikedStations(liked);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (cities.length) {
			dispatch(fetchPickedNetworRequest(cities[0].id));
			setActiveCityId(cities[0].id);
		}
	}, [cities]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (network === null) {
			setNetwork(pickedNetwork[0]);
		} else if (pickedNetwork.length) {
			setNetwork(pickedNetwork[pickedNetwork.length - 1]);
		};
	}, [pickedNetwork]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleCityClick = (id: string) => {
		const isSameID = pickedNetwork.find((item: INetwork) => item.id === id);
		if (isSameID) {
			setNetwork(isSameID);
			setActiveCityId(isSameID.id);
		} else {
			dispatch(fetchPickedNetworRequest(id));
			setActiveCityId(id);
		}
	};

	const likeStation = (id: string) => {
		const liked = JSON.parse(localStorage.getItem('citibykes-likedStaions') || '[]');
		const isLiked = liked.find((item: string) => item === id);
		if (!isLiked) {
			liked.push(id);
		} else {
			const index = liked.indexOf(id);
			liked.splice(index, 1);
		};
		localStorage.setItem('citibykes-likedStaions', JSON.stringify(liked));
		setLikedStations(liked);
	};

	return (
		<>
			<Header network={network} />
			<div className={styles.content}>
				<div className={styles.collumn}>
					{pending ? <div>Loading...</div> : error ? <div>Error</div> : (
						<CitiesList
							activeCity={activeCityId} 
							cities={cities} 
							handleCityClick={handleCityClick} 
						/>
					)}
				</div>
				<div className={styles.collumn}>
					{pickedNetworkPending ? <div>Loading...</div> : pickedNetworkError ? <div>Error</div> : (
						network && network.stations.length && (
							<NetworkStationsList
								stations={network.stations}
								likeStation={likeStation}
								likedStations={likedStations}
							/>
						)
					)}
				</div>
			</div>
		</> 
  	);
};

export default App;
