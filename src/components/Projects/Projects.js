import styles from './styles.module.scss';
import { projectList } from './ProjectList';
// import projectImage from '../../assets/projects/music-visualizer.jpg'

function ProjectCard({ project }) {
	return (
		<div className={styles.ProjectCard}>
			<img src={project.image} alt='project' />
			<div className={styles.info}>
				<p className={styles.date}>{project.date}</p>
				<div className={styles.cardHeader}>
					<span className={styles.cardName}>{project.name}</span>
					{
						project.domains.map((domain, index) => {
								return (
									<span key={index}>・{domain}</span>
							);
						})
					}
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

export default function Projects( { count }) {
	return (
		<div className={styles.Projects}>
			<h1>Projects</h1>
			{
				projectList.slice(0, count).map((project, index) => {
				// projectList.map((project, index) => {
					return (
						<ProjectCard project={project} key={index} />
					);
				})
			}
			<a href="/">more..</a>
		</div>
	);
}
