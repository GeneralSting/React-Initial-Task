import { EmployeeApiResponse } from "../types/api/employeeApiResponse";
import { PaginationMeta } from "../types/api/paginationMeta";

const setEmployeeMetaData = (
  actionPayload: EmployeeApiResponse
): PaginationMeta => {
  const metaData: PaginationMeta = {
    current_page: actionPayload.current_page,

    first_page_url: actionPayload.first_page_url,

    from: actionPayload.from,

    last_page: actionPayload.last_page,

    last_page_url: actionPayload.last_page_url,

    links: actionPayload.links,

    next_page_url: actionPayload.next_page_url,

    path: actionPayload.path,

    per_page: actionPayload.per_page,

    prev_page_url: actionPayload.prev_page_url,

    to: actionPayload.to,

    total: actionPayload.total,
  };

  return metaData;
};

export default setEmployeeMetaData;
