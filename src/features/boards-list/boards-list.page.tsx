import { Link, href } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes.ts";

function BoardListPage() {
  return (
    <div>
      <h1>Boards list</h1>
      <Link to={href(ROUTES.BOARD, { boardId: "1" })}>Board 1</Link>
    </div>
  )
}

export const Component = BoardListPage;