import styles from './styles.module.scss'
import hero from '../../assets/me-doodle.png'

export default function About() {
  
  return (
    <div className={styles.about}>
      <p>
        Hello!<br/>
        I&apos;m Fawaz Abid Hussain.
      </p>
      <img className='image' src={hero} alt="me" />
      <p>
        just another ordinary student who sits with his laptop trying to build cool stuff for fun.
      </p>
      <p>
        <a href='mailto:fawazabid96@gmail.com' target='blank'>Mail</a>・
        <a href='https://github.com/fauwara' target='blank'>GitHub</a>・
        <a href='https://www.linkedin.com/in/fawaz-abid/' target='blank'>LinkedIn</a>・
        <a href='https://twitter.com/Fazxza' target='blank'>Twitter</a>・
        {/* <a href='#' onClick={copyURI()}>discord</a>・ */}
        <a href='https://steamcommunity.com/profiles/76561198315461197/' target='blank'>Steam</a>
      </p>
    </div>
  )
}
