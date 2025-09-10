import React, { useState } from 'react';
import Popup from './Popup';
import './Services.css';

const services = [
	{
		id: 1,
		oneline: 'Building websites using React or Django, with a focus on frontend development but capable of backend work.',
		description: 'I specialize in building websites using React or Django. My expertise lies in frontend development, creating visually appealing and user-friendly interfaces. However, I am also capable of handling backend tasks to deliver complete solutions.',
		links: [
			{
				label: 'This very website',
				url: ''
			},
			{
				label: 'React project - FDS',
				url: 'https://github.com/Khushi-MA/javaFDS'
			},
			{
				label: 'django project - Hospital Management',
				url: 'https://github.com/Khushi-MA/hospital-django'
			}
		]
	},
	{
		id: 2,
		oneline: 'Formatting Word documents with complex components like formulae or making resumes, and print-ready reports, ensuring great consistency.',
		description: 'I excel at formatting Word documents, handling complex components such as formulae or creating professional resumes, and designing print-ready reports. My attention to detail ensures great consistency and high-quality results.',
		links: [
			{
				label: 'Two column Research paper',
				url: '${process.env.PUBLIC_URL}/docs/s1-paper.docx'
			}
			// ,
			// {
			// 	label: 'LinkedIn Post',
			// 	url: 'https://www.linkedin.com/in/khushi-appannavar/details/projects/'
			// },
			// {
			// 	label: 'IEEE page',
			// 	url: 'https://ieeexplore.ieee.org/document/1234567'
			// }
		]
	},
	{
		id: 3,
		oneline: 'Creating simple yet effective PowerPoint presentations, especially for workflows or adding interactivity.',
		description: 'I can create simple yet effective PowerPoint presentations using Microsoft PowerPoint. Whether it is explaining workflows, making the content more interactive, or enhancing the visual appeal, I ensure the presentations are engaging and easy to understand.',
		links: [
			{
				label: 'E-birding Presentation',
				url: 'https://github.com/Khushi-MA/NCF_Ebird_Data_Analysis/blob/main/e%20birding.pptx'
			}
			,
			{
				label: 'Project presentation',
				url: 'https://ieeexplore.ieee.org/document/???'
			}
		]
	},
	{
		id: 4,
		oneline: 'Writing content, both formal and informal, with experience as a content creator in MiB (e-cell in university).',
		description: 'I have the ability to write content tailored to various needs, whether formal or informal. With experience as a content creator in MiB (the e-cell in my university), I can craft engaging and impactful content for diverse audiences.',
		links: [
			{
				label: 'Pupa 2023',
				url: 'https://www.linkedin.com/posts/khushi-appannavar_pupa-ctie-mib-activity-7178285688377802753-S2UH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0'
			},
			{
				label: 'Pupa 2022',
				url: 'https://www.linkedin.com/posts/makeinbvb_pupa-entrepreneurs-ideas-ugcPost-7176287827398189058-vIaa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0'
			},
			{
				label: 'Ode to seniors',
				url: 'https://www.linkedin.com/posts/makeinbvb_pupa-entrepreneurs-ideas-ugcPost-7176287827398189058-vIaa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADnqyrkBwKGBo_j7B5Ge0YR1b7o-8buion0'
			}
			// ...add more links if necessary...
		]
	}
];

const Services = ({ onPopupOpen, onPopupClose }) => {
	const [selectedService, setSelectedService] = useState(null);

	const handleCardClick = (service) => {
		setSelectedService(service);
		onPopupOpen && onPopupOpen(); // Notify popup is active
	};

	const handleClosePopup = () => {
		setSelectedService(null);
		onPopupClose && onPopupClose(); // Notify popup is inactive
	};

	return (
		<div className="service-section">
			<h1>Services</h1>
			<div className="services-container">
				{services.map((pub) => (
					<div
						key={pub.id}
						className="service-card"
						onClick={() => handleCardClick(pub)}
					>
						<div className="card-content">
							<p>{pub.oneline}</p>
						</div>
						<div className="links">
							<div className="project-list-links">
								{pub.links.map((link, idx) => (
										<a
											key={idx}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="project-list-link"
											onClick={(e) => e.stopPropagation()}
											title={link.label}
										>
											{link.label}
										</a>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
			{selectedService && (
				<Popup
					description={selectedService.description}
					links={selectedService.links}
					isOpen={!!selectedService}
					onClose={handleClosePopup}
				/>
			)}
		</div>
	);
};

export default Services;
