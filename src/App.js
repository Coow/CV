import image from './cropped.png';
import './App.css';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Grid, Row, Col } from 'react-flexbox-grid';

import { AiOutlineMail, AiFillGithub, AiOutlinePhone } from 'react-icons/ai'
import { MdWork } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { GrVmware } from 'react-icons/gr';
import InfoLine from './Components/InfoLine';

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
							<InfoLine icon={<AiOutlineMail/>} text={`eirik@skarding.no`}/>
							<InfoLine icon={<AiOutlinePhone/>} text={`+47 47 61 31 21`}/>
							<InfoLine icon={<AiFillGithub/>} text={<a href="https://github.com/coow">Github.com/Coow</a>}/>
						</div>
					</Col>
				</Row>
			</Grid>

			<VerticalTimeline className="alligner" animate="false" layout="1-column-left" style={{
				width: '50%'
			}}>
				<VerticalTimelineElement
					className="vertical-timeline-element--work w-5/5"
					contentStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="August 2021 - Current"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<MdWork />}
					visible="true"
				>
					<h3 className="vertical-timeline-element-title">Software Engineer - Amitec AS</h3>
					<h4>
						Software Engineer working with OSISoft PI Systems
					</h4>
					<p>
						Working with supporting customers with their OSISoft PI systems.
						Managing dataflow and data, and making sure the customer has a reliable source of their realtime data, to use for their Process Analysis.
						<br />
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work w-5/5"
					contentStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="August 2020 - Novemeber 2020"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<MdWork />}
					visible="true"
				>
					<h3 className="vertical-timeline-element-title">FullStack Developer - Microsky AS</h3>
					<h4>
						Internal FullStack developer, IT Consultant, DevOps, MSP
					</h4>
					<p>
						Started work on an CRP/ERP system for both internal and external use. Allowing customers to manage and export cost in Azure, manage licenses and users, see their compliance with ISO standards & more.
						<br />
						<br />
						Tech used
						<br />- React, Node, TSX, SCSS/CSS3 for frontend
						<br />- Node/Express, Azure API Gateway, Azure App Service, Azure Functions & Azure MySQL for backend
						<br />- Microsoft Graph & Enterprise application for authenticating users
						<br />- Drone, Docker, Azure Container Registry, Azure App Service & Azure DevOps for CI/CD
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work w-5/5"
					contentStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
					date="August 2018 - August 2020"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
					icon={<MdWork />}
					visible="true"
				>
					<h3 className="vertical-timeline-element-title">IT Apprentice - Iver Norge AS</h3>
					<h4>
						Internal Development, IT Technician, Networking and Helpdesk
					</h4>
					<p>
						Worked with hosting customers enviroments on VMWare and partially Azure Stack aswell. Everything from SMB customers RDS Enviorments, to larger customers such as KPMG.
						<br /><br />
						Created internal monitoring systems for our VMWare Clusters and AzureStack, integrating it with our Ticketing System
						<br /><br />
						An ELO based leaderboard when we got competetive internally with TableTennis, using our ID cards for user verification
						<br /><br />
						Tech used
						<br />- PowerShell
						<br />- C# .NET
						<br />- NodeJS
						<br />- Python
						<br />- PHP
						<br />- Git
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>

			<div className="mx-8 pb-16 personalProject" style={{
				width: '65%'
			}}>
				<h2 className="ml-8 ">Personal Projects</h2>
				<VerticalTimeline className="personalProject-timeline" animate="false" layout="" style={{
					width: '50%'
				}}>
					<VerticalTimelineElement
						className="vertical-timeline-element--work w-5/5"
						contentStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date="June 2020 - Current"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<FaDiscord />}
						visible="true"
					>
						<h3 className="vertical-timeline-element-title">React Leaderboard App</h3>
						<h4>
							FullStack React TS App with a NestJS Backend
						</h4>
						<span className="text-black text-opacity-25">(Still in active development)</span>

						<p>
							<br />
							App that allows users to have a ranked leaderboard using the ELO ranking system, with Real Life Games, such as Shuffleboard or TableTennis
							<br />
							Made as a new and updated version of the "original" app made during my apprenticeship.
							<br />
							Players can make their own matches, and can play in teams of 1v1, 1v2, 2v2 etc.

						</p>
						<p>
							Tech used
							<br />- ReactTS, NestJS
							<br />- Docker
							<br />- MongoDB
							<br />- Drone CI

						</p>
					</VerticalTimelineElement>
				</VerticalTimeline>

				<VerticalTimeline className="personalProject-timeline" animate="false" layout="" style={{
					width: '50%'
				}}>

					<VerticalTimelineElement
						className="vertical-timeline-element--work w-5/5"
						contentStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date="June 2020 - Current"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<FaDiscord />}
						visible="true"
					>
						<h3 className="vertical-timeline-element-title">GCI Bot</h3>
						<span className="text-black text-opacity-25">(Still in active development)</span>
						<h4>
							Discord bot with 100,000+ users, and moderates 300,000+ messages a month
							<br />
							Includes a web interface for managing banned users, banned links & other settings
							<br />
							Locked behind a OAuth2 Login Flow
							<br />
							<br />
							<br />

						</h4>
						<p>
							Tech used
							<br />- NodeJS (Discord.JS, Express)
							<br />- Docker
							<br />- MongoDB
							<br />- Drone CI

						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work w-5/5"
						contentStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date="August 2019 - Current"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<FaDiscord />}
						visible="true"
					>
						<h3 className="vertical-timeline-element-title"><a href="https://cowlandia.net">Cowlandia.net</a></h3>
						<span className="text-black text-opacity-25">(Still in active development)</span>
						<h4>
							Discord Bot providing a customizable Leaderboard of users rank in different games in a channel
							Games includes; League of Legends, CSGO, R6S & RuneScape
							<br />
							Also includes a Web Leaderboard on <a className="underline" href="https://cowlandia.net">Cowlandia.net</a> with Discord OAuth2 Login to see all the servers you are in
							<br />
							<br />

						</h4>
						<p>
							Tech used
							<br />- NodeJS (Discord.JS, Express)
							<br />- Docker
							<br />- MongoDB
							<br />- Drone CI

						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--work w-5/5"
						contentStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date=""
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<GrVmware />}
						visible="true"
					>
						<h3 className="vertical-timeline-element-title">Personal HomeLab</h3>
						<h4>
							HomeLab rig running VMWare 7
						</h4>
						<p>
							A Homelab running in the basement for hosting most of my personal project, aswell as a number of Game Servers for friends.
							<br />
							7 Node VMWare 7 Cluster with SAN, with internal 10Gig networking
							<br />
							1 Azure VM for 24/7 and Gateway with VPN connection
							<br /><br />
						</p>
					</VerticalTimelineElement>
				</VerticalTimeline>

			</div>
		</div >
	);
}

export default App;