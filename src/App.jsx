import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/D5603AQHG96VdpH2IGg/profile-displayphoto-shrink_100_100/0/1677773588365?e=1689811200&v=beta&t=MAj9-JfEsRSJvfvhO5r40YOITkLDtyPzpbRdcI6fZaE",
      name: "Paulo Henrique",
      role: "Web Developer Front-end Junior",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 ph.webdeveloper/front-end' }      
    ],
    publishedAt: new Date('2023-05-26 11:05:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://c4.wallpaperflare.com/wallpaper/885/895/695/the-amazing-spider-man-wallpaper-preview.jpg",
      name: "Spider-Man",
      role: "Executivo na Picos da Montanha",
    },
    content: [
      { type: 'paragraph', content: 'Ooie Pessoal, estou amando essa plataforma nova' },
      { type: 'paragraph', content: 'Espero que todos façam o pix do sorteio, não fique de fora dessa oportunidade de ganhar um carro novo. Avaliado em 280 mil reais, você pode ser o novo ganhador de uma linda BMW' },
      { type: 'link', content: '👉 casadosorteio.com/bmw-new' }      
    ],
    publishedAt: new Date('2023-05-22 11:05:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />        
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}