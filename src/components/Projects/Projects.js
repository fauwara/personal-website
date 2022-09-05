import styles from './styles.module.scss';
import { projectList } from './ProjectList';
// import projectImage from '../../assets/projects/music-visualizer.jpg'

function ProjectCard({ project }) {
	return (
		<div className={styles.ProjectCard}>
			<img className={styles.imgDesktop} src={project.image} alt='project' />
			<div className={styles.info}>
				<p className={styles.date}>{project.date}</p>
				<div className={styles.cardHeader}>
					<span className={styles.cardName}>{project.name}</span>
					<img className={styles.imgMobile} src={project.image} alt='project' />
					<div className={styles.domains}>
						{
							project.domain.map((item, index) => {
								return (
									<span className={styles.tagDomain} key={index}>{item}</span>
								);
							})
						}
						{
							project.tech.map((item, index) => {
								return (
									<span className={styles.tagTech} key={index}>{item}</span>
								);
							})
						}
					</div>
				</div>
				<p className={styles.desc}>{project.desc}</p>
				<div className={styles.cardFooter}>
					{project.link && <span><a href={project.link} target='blank'>Project link</a>・</span>}
					{project.github && <a href={project.github} target='blank'>GitHub</a>}
				</div>
			</div>
		</div>
	);
}

export function ProjectCardList({ count }) {
	return (
		<div>
			{/* <h1>Projects</h1> */}
			{
				projectList.slice(0, count).map((project, index) => {
					// projectList.map((project, index) => {
					return (
						<ProjectCard project={project} key={index} />
					);
				})
			}
			{/* <a href="/projects">more..</a> */}
		</div>
	);
}

export default function ProjectSection({ count }) {
	return (
		<div className={styles.Projects}>
			<h1>Projects</h1>
			<ProjectCardList count={count} />
			<a href="/projects">more..</a>
		</div>
	);
}

