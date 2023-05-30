import styles from'./Header.module.css'

import iginteLogo from '../assets/ignite-logo.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={iginteLogo} alt="logotipo do ignite" />
            <h1>Ignite Feed</h1>
        </header>
    )
}