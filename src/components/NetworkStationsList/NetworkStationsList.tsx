import cn from 'classnames';

import styles from './networkStationsList.module.css';

interface INetworkStationsList {
	stations: any[];
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
					<span className={cn(
						{[styles.notLike]: !likedStations.includes(station.id)}, 
						{[styles.like]: likedStations.includes(station.id)}
					)}/>
				</div>
			))};
		</div>
)

export default NetworkStationsList;

