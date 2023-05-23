import styles from './Styles.module.scss'

export function ProdItem({}){
  return(
    <div className={styles.container}>
      <div className={styles.info}>
        <p>Marca:</p>
        <p>Caloi</p>
        <p>Modelo:</p>
        <p>BMX</p>
        <p>Compra:</p>
        <p>17</p>
        <p>Status:</p>
        <p>17/02/2023</p>
      </div>
      <div className={styles.price}>
        <p>Preço:</p>
        <p> R$ 1,115.00</p>
      </div>
      <div className={styles.image}>
        <img src="" alt="Imagem do produto"/>
      </div>
    </div>
  )
}