import { Row} from 'react-flexbox-grid';

export default function InfoLine(props) {
    return <Row>
        <div className="my-auto mr-2">
        {props.icon}
        </div>
        <h3>
            {props.text}
        </h3>
    </Row>
}