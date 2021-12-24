import image from './cropped.png';
import './App.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { AiOutlineMail, AiFillGithub, AiOutlinePhone } from 'react-icons/ai'
import { MdWork } from 'react-icons/md';
import { FaDiscord, FaReact } from 'react-icons/fa';
import { GrVmware } from 'react-icons/gr';

import InfoLine from './Components/InfoLine';
import Project from './Components/Project';
import WorkExperience from './Components/WorkExperience';

function App() {
	return (
		<div className="App w-5/5">
			<Grid className="alligner personalInfo">
				<Row>
					<Col xs={4}>
						<img src={image} className="mt-10 w-4/5" style={{
							borderRadius: '5%'
						}} />
					</Col>
					<Col className="pt-16 pl-4">
						<h2>Eirik Skarding</h2>
						<hr
							style={{
								color: '#000',
								backgroundColor: '#000',
								height: 3
							}}
						/>
						<div>
							<InfoLine icon={<AiOutlineMail />} text={`eirik@skarding.no`} />
							<InfoLine icon={<AiOutlinePhone />} text={`+47 47 61 31 21`} />
							<InfoLine icon={<AiFillGithub />} text={<a href="https://github.com/coow">Github.com/Coow</a>} />
						</div>
						<div className="pt-16 text-xs text-gray-500">
							<InfoLine icon={<FaReact />} text="CV Made with React" />
						</div>
					</Col>
				</Row>
			</Grid>

			<VerticalTimeline className="alligner" animate="false" layout="1-column-left" style={{
				width: '50%'
			}}>

				<WorkExperience
					icon={<MdWork />}
					date="August 2021 - Current"
					title={"Software Engineer - Amitec AS"}
					shortDescription="Software Engineer working with OSISoft PI Systems"
					description={					<p>
						Working with supporting customers with their OSISoft PI systems.
						Managing dataflow and data, and making sure the customer has a reliable source of their realtime data, to use for their Process Analysis.
					</p>} />

				<WorkExperience
					icon={<MdWork />}
					date="August 2020 - November 2020"
					title={"FullStack Developer - Microsky AS"}
					shortDescription="Internal FullStack developer, IT Consultant, DevOps, MSP"
					description={<p>
						Started work on an CRP/ERP system for both internal and external use. Allowing customers to manage and export cost in Azure, manage licenses and users, see their compliance with ISO standards & more.
						<br /><br />
						Tech used
						<br />- ReactTS, SCSS/CSS3 for frontend
						<br />- Node/Express, Azure API Gateway, Azure App Service, Azure Functions & Azure MySQL for backend
						<br />- Microsoft Graph & Enterprise application for authenticating users
						<br />- Drone, Docker, Azure Container Registry, Azure App Service & Azure DevOps for CI/CD
					</p>} />

				<WorkExperience
					icon={<MdWork />}
					date="August 2018 - August 2020"
					title={"IT Apprentice - Iver Norge AS"}
					shortDescription="Internal Development, IT Technician, Networking and Helpdesk"
					description={<p>
						Worked with hosting customers environments on VMWare and Azure Stack. Everything from SMB customers RDS Environments, to larger customers such as KPMG.
						<br /><br />
						Created internal monitoring systems for our VMWare Clusters and AzureStack, integrating it with our Ticketing System
						<br /><br />
						An ELO based leaderboard when we got competitive internally with TableTennis, using our ID cards for user verification
						<br /><br />
						Tech used
						<br />- PowerShell, C# .NET, Node, Python, PHP, Git
						<br />- VMWare, HyperV
					</p>} />
			</VerticalTimeline>

			<div className="mx-8 pb-16 personalProject" style={{
				width: '65%'
			}}>
				<h2 className="ml-8 ">Personal Projects</h2>
				<VerticalTimeline className="personalProject-timeline" animate="false" layout="" style={{
					width: '50%'
				}}>
					<Project
						icon={<FaDiscord />}
						note="(Still in active development)"
						date="August 2021 - Current"
						title={"React Leaderboard App"}
						shortDescription={<>FullStack React TS App with a NestJS Backend</>}
						description={<p>
							App that allows users to have a ranked leaderboard using the ELO ranking system, with Real Life Games, such as Shuffleboard or TableTennis
							<br />
							Made as a new and updated version of the "original" app made during my apprenticeship.
							<br />
							Players can make their own matches, and can play in teams of 1v1, 1v2, 2v2 etc.
							<br /><br />
							Tech used
							<br />- ReactTS, NestJS
							<br />- Docker
							<br />- MongoDB
							<br />- Drone CI
						</p>} />

					<Project
						icon={<FaDiscord />}
						note="(Still in active development)"
						date="June 2020 - Current"
						title={"GCI Bot"}
						shortDescription={<>Discord bot with 250,000+ users, and moderates 600,000+ messages a month</>}
						description={<p>
							Includes a web interface for managing banned users, banned links & other settings
							<br />
							Locked behind a OAuth2 Login Flow
							<br /><br />
							Tech used
							<br />- NodeJS (Discord.JS, Express)
							<br />- Docker
							<br />- MongoDB
							<br />- Drone CI

						</p>} />

					<Project
						icon={<FaDiscord />}
						note="(Still in active development)"
						date="August 2019 - Current"
						title={<a href="https://cowlandia.net">Cowlandia.net</a>}
						shortDescription={<>Discord Bot providing a customizable Leaderboard of users rank in different games</>}
						description={<p>
							Games includes; League of Legends, CSGO, R6S & RuneScape
							<br />
							Also includes a Web Leaderboard on <a className="underline" href="https://cowlandia.net">Cowlandia.net</a> with Discord OAuth2 Login to see all the servers you are in
							<br /><br />
							Tech used
							<br />- NodeJS (Discord.JS, Express)
							<br />- React
							<br />- Docker
							<br />- MongoDB
							<br />- Drone CI
						</p>} />

					<Project
						icon={<GrVmware />}
						title="Personal HomeLab"
						shortDescription="HomeLab rig running VMWare 7 and Proxmox"
						description={<p>
							A Homelab running in the basement for hosting most of my personal project, aswell as a number of Game Servers for friends.
							<br />
							7 Node VMWare 7 Cluster with SAN, with internal 10Gig networking
							<br />
							1 Azure VM for 24/7 and Gateway with VPN connection
							<br /><br />
						</p>} />

				</VerticalTimeline>

			</div>
		</div >
	);
}

export default App;