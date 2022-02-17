import cn from 'classnames';

import { FaHeart } from "react-icons/fa";

import styles from './networkStationsList.module.css';

interface IStations {
	empty_slots: number;
	extra: object;
	free_bikes: number;
	id: string;
	latitude: string;
	longitude: string;
	name: string;
	timestamp: string;
}

interface INetworkStationsList {
	stations: IStations[];
	likeStation: (id: string) => void;
	likedStations: string[];
}

const NetworkStationsList = ({stations, likeStation, likedStations}: INetworkStationsList) => (
		<div>
			{stations.map(station => (
				<div
					className={styles.item} 
					key={station.id}
					onClick={() => likeStation(station.id)}
				>
					<span className={styles.text}>{station.name}</span>
					<FaHeart className={cn(
						{[styles.notLike]: !likedStations.includes(station.id)}, 
						{[styles.like]: likedStations.includes(station.id)}
					)}/>
				</div>
			))};
		</div>
)

export default NetworkStationsList;

