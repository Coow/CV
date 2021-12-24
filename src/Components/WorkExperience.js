import { VerticalTimelineElement } from 'react-vertical-timeline-component';

export default function WorkExperience(props) {
    return <VerticalTimelineElement
        className="vertical-timeline-element--work w-5/5"
        contentStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={props.date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={props.icon}
        visible="true"
    >
        <h3 className="vertical-timeline-element-title">{props.title}</h3>
        <span className="text-black text-opacity-25">{props.note}</span>
        <h4>{props.shortDescription}</h4>
        {props.description}
    </VerticalTimelineElement>
}