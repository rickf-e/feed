import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import Capa from '../assets/capa-aside.jpg'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img src={Capa} className={styles.cover} />
            <div className={styles.profile}>
                <Avatar src="https://media.licdn.com/dms/image/D5603AQHG96VdpH2IGg/profile-displayphoto-shrink_100_100/0/1677773588365?e=1689811200&v=beta&t=MAj9-JfEsRSJvfvhO5r40YOITkLDtyPzpbRdcI6fZaE" />

                <strong>Paulo Henrique</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="/">
                    <PencilLine size={20} />
                    Editar Perfil
                </a>
            </footer>
        </aside>
    )
}