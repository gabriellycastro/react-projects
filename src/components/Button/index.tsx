import { ButtonDefault } from "./style"

interface ButtonProps {
    text: string;
    color: string;
    action?: () => void;
}

export default function Button(props: ButtonProps) {
    return  <ButtonDefault color={props.color !== 'null' ? props.color : 'pink'} onClick={props.action}>{props.text}</ButtonDefault>
}