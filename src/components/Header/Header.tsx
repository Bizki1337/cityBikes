import styles from './header.module.css';

interface INetwork {
    company: [];
    href: string;
    id: string;
    location: object;
    name: string;
    stations: [];
}

interface IHeader {
    network: INetwork | null
};

const Header = ({network}: IHeader) => {
    return (
        <div className={styles.header}>
            <div className={styles.name}>Name: {network && network.name}</div>
            <div className={styles.amount}>Amount: {network && network.stations.length}</div>
        </div>
    );
};

export default Header;