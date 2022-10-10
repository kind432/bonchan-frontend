import {Link} from "react-router-dom";
import {IForum} from "../../models/models";

interface Props {
    forum: IForum
}

export function ForumItem({forum}: Props) {
    return(
        <div>
            <li className="px-6 py-1 ml-2 text-xs hover:text-orange-200 text-white tracking-wide truncate">
                <Link to={"/forum/" + forum.id}>
                    {forum.name}
                </Link>
            </li>
        </div>
    )
}