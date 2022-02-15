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
import List from 'components/List/List';

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

	const [likedStations, setLikedStations] = useState<[]>([]);

	useEffect(() => {
		dispatch(fetchCitiesRequest());
		const liked = JSON.parse(localStorage.getItem('likedStaions') || '{}');
		setLikedStations(liked);
	}, []);

	useEffect(() => {
		if (cities.length) {
			dispatch(fetchPickedNetworRequest(cities[0].id));
		};
	}, [pending]);

	useEffect(() => {
		if (network === null && pickedNetwork.length) {
			setNetwork(pickedNetwork[0]);
		} else if (pickedNetwork.length) {
			setNetwork(pickedNetwork[pickedNetwork.length - 1]);
		};
	}, [pickedNetwork]);

	const handleClick = (id: string) => {
		const isSameID = pickedNetwork.find((item: INetwork) => item.id === id);
		if (isSameID) {
			setNetwork(isSameID);
		} else {
			dispatch(fetchPickedNetworRequest(id));
		};
	};

	const likeStation = (id: string) => {
		const liked = JSON.parse(localStorage.getItem('likedStaions') || '{}');
		const isLiked = liked.find((item: string) => item === id);
		if (!isLiked) {
			liked.push(id);
		} else {
			const index = liked.indexOf(id);
			liked.splice(index, 1);
		};
		localStorage.setItem('likedStaions', JSON.stringify(liked));
		setLikedStations(liked);
	};

	return (
		<>
			<Header network={network} />
			<div className={styles.content}>
				{
					cities.length && <List
						listItems={cities}
						itemType='cities'
						pending={pending}
						error={error}
						handleClick={handleClick}
					/>
				}
				{
					network && <List
						listItems={network.stations}
						itemType='networks'
						pending={pickedNetworkPending}
						error={pickedNetworkError}
						likedStations={likedStations}
						handleClick={likeStation}
					/>
				}
			</div>
		</> 
  	);
};

export default App;
