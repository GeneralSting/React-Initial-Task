import { PaginationMeta } from "../types/api/paginationMeta";

const metaInitialState: PaginationMeta = {
  current_page: 1,
  first_page_url: "",
  from: 0,
  last_page: 1,
  last_page_url: "",
  links: [],
  next_page_url: null,
  path: "",
  per_page: 10,
  prev_page_url: null,
  to: 0,
  total: 0,
};

export default metaInitialState;
