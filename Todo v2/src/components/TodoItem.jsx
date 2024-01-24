import styles from "./todoitem.module.css"
export default function TodoItem({ item }) {
  return (
    <div className={styles.item}>
      <h3 className={styles.itemName}>{item}</h3>
      <hr className={ styles.line}/>
    </div>
  )
}