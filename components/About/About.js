import Image from 'next/image'
import styles from './About.module.scss'

export default function About() {
  // let copyURI = () => {
  //   console.log('hello')
  //   // navigator.clipboard.writeText('the text');
  // }
  
  return (
    <div className={styles.about}>
      <p>
        Hello!<br/>
        I&apos;m Fawaz Abid Hussain.
      </p>
      <img className="HomeImg" src="/me-doodle.png" alt="me" />
      {/* <Image src="/me.png" alt="Vercel Logo" width={100} height={20} /> */}
      <p>
        just another ordinary student who sits with his laptop trying to build kewl stuff.
      </p>
      <p>
        <a href='mailto:fawazabid96@gmail.com' target='blank'>mail</a>・
        <a href='https://github.com/fauwara' target='blank'>github</a>・
        <a href='https://twitter.com/Fazxza' target='blank'>twitter</a>・
        {/* <a href='#' onClick={copyURI()}>discord</a>・ */}
        <a href='https://steamcommunity.com/profiles/76561198315461197/' target='blank'>steam</a>
      </p>
    </div>
  )
}
