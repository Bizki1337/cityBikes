import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getCitiesPendingSelector,
  getCitiesSelector,
  getCitiesErrorSelector,
} from "library/common/selectors/citiesSelectors";

import {
	getPickedNetworkSelector,
	getPickedNetworkPendingSelector,
	getPickedNetworErrorSelector
} from 'library/common/selectors/pickedNetworkSeletors';

import { fetchCitiesRequest } from "library/common/actions/citiesActions";
import { fetchPickedNetworRequest } from "library/common/actions/pickedNetworkActions";

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const pending = useSelector(getCitiesPendingSelector);
  const cities = useSelector(getCitiesSelector);
  const error = useSelector(getCitiesErrorSelector);

  const pickedNetwork = useSelector(getPickedNetworkSelector);
  const pickedNetworkPending = useSelector(getPickedNetworkPendingSelector);
  const pickedNetworkError = useSelector(getPickedNetworErrorSelector);

  const [likedStations, setLikedStations] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchCitiesRequest());
  }, []);

  useEffect(() => {
	if (cities.length) {
		dispatch(fetchPickedNetworRequest(cities[0].id));
		console.log('todos[0]', cities[0].id)
	}
  }, [pending]);

  const handleClick = (id: string) => {
	dispatch(fetchPickedNetworRequest(id));
  }

  const likeStation = (id: string) => {
	const liked = [...likedStations]
	const isLiked = liked.find((item: string) => item === id);
	if (!isLiked) {
		liked.push(id);
	} else {
		const index = liked.indexOf(id);
		liked.splice(index, 1)
	}
	setLikedStations(liked);
	console.log('id', id)
  }

  console.log('pickedNetwork', pickedNetwork)
  console.log('pickedNetworkPending---------------', pickedNetworkPending)
  console.log('pickedNetworkError', pickedNetworkError)

  console.log('likedStations', likedStations)

  return (
	  <div>
		<div className='header'>
			<div className='header_name'>Name: {pickedNetwork.name && pickedNetwork.name}</div>
			<div className='header_amount'>Amount: {pickedNetwork.stations && pickedNetwork.stations.length}</div>
		</div>
		<div className='content'>
			<div className='collumn'>
				{pending ? (
					<div>Loading...</div>
					) : error ? (
						<div>Error</div>
					) : (
						cities.map((city: any, index: any) => (
						<div 
							className='collumn_item__left'
							key={city.id} 
							onClick={(e: any) => handleClick(city.id)}
						>
							<span>{++index}. {city.id}</span>
						</div>
						))
					)}
			</div>
			<div className='collumn'>
				{
					pickedNetworkPending ? (
						<div>Loading...</div>
					) : pickedNetworkError ? (
						<div>Error</div>
					) : (
						<div>
							{
								pickedNetwork.stations && pickedNetwork.stations.map((item: any, index: number) => {
									let classNameList = '';
									const isLiked = likedStations.find((station: string) => station === item.id);
									if (isLiked) {
										classNameList = 'like'
									} else {
										classNameList = 'notLike'
									}
									return (
										<div
											className='collumn_item__right' 
											key={item.id}
											onClick={(e: any) => likeStation(item.id)}
										>
											<span className='collumn_item__right_text'>
												{item.name}
											</span>
											<span className={classNameList}/>
										</div>
									)
								}
								)
							}
						</div>
					)
				}
			</div>
		</div>
	  </div>

    
  );
};

export default App;
