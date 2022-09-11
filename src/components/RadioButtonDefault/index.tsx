import { useNavigate } from "react-router-dom";

interface RadioProps {
    color: string;
    colorValue: (event: any) => void;
}

export default function RadioButtonDefault(props: RadioProps) {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/task-manager", { replace: true })
    }

    return (
        <div className={`label-color btn-${props.color}`}>
            <label htmlFor={props.color}>{props.color}</label>
            <input type="radio"
            id={props.color}
            name="buttonColor"
            value={props.color}
            onChange={props.colorValue}
            onClick={handleClick} />
        </div>
    )
}