import { TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useDebounce from "../../hooks/useDebounce";

const SearchInput = ({
  searchedEmployees,
}: {
  searchedEmployees: (query: string) => void;
}) => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    searchedEmployees(debouncedSearchValue);
  }, [debouncedSearchValue, searchedEmployees]);

  return (
    <TextField
      size="small"
      value={searchValue}
      onChange={handleChange}
      label={t("pages.directory.table.head.searchInputLabel")}
    />
  );
};

export default SearchInput;
