import styles from "../styles/Footer.module.scss"

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <p>Next js app </p>
            <div className={styles.footer__left}>
                <a href="https://github.com/Antoine75/app-ecomm">by @Antoine75</a>
            </div>
        </footer>
    )
}