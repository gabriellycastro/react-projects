import { Item } from "./style";

interface TaskItemProps {
    title: string;
    done?: boolean;
    finishTask: () => void;
    removeTask: () => void;
}

export default function TaskItem(props: TaskItemProps) {
    return (
        <Item done={props.done}>
            <span onClick={props.removeTask}>❌</span>
            <p>{props.title}</p>
            <span onClick={props.finishTask}>✔️</span>
        </Item>
    )
}