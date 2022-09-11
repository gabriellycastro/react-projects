import { Link as LinkRoute} from 'react-router-dom';

interface LinkProps {
    icon?: string;
    text: string;
    redirect: string
}

export default function Link(props: LinkProps) {
    return (
        <LinkRoute to={props.redirect}>
            <i>{props.icon}</i>
            {props.text}
        </LinkRoute>
    )
}