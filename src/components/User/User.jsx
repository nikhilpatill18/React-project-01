import { useParams } from "react-router";
export default function User() {
    const { userid } = useParams()
    return (
        <div>User :{userid}</div>
    )
}