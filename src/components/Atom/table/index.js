import { CompactTable } from "@table-library/react-table-library/compact";
import {
  Style,
  NameContainer,
  Image,
  Name,
  Red,
  Blue,
  AccountContainer,
  Button,
} from "./styled";
import { useNavigate } from "react-router-dom";

const Table = ({ nodes, header }) => {
  const navigate = useNavigate();

  const handleRowClick = (rowData) => {
    const id = rowData.id;
    navigate(`/management/${id}`, { state: { rowData } });
  };

  const COLUMNS = header.map((item) => {
    return {
      label: item,
      renderCell: (rowData) => {
        if (item === "이름") {
          return (
            <NameContainer onClick={() => handleRowClick(rowData)}>
              <Image src={rowData[item][0]} alt="고객 이미지" />
              <Name>{rowData[item][1]}</Name>
            </NameContainer>
          );
        } else if (item.includes("수익률")) {
          if (rowData[item] >= 0) {
            return (
              <Red onClick={() => handleRowClick(rowData)}>
                {rowData[item]}%
              </Red>
            );
          }
          return (
            <Blue onClick={() => handleRowClick(rowData)}>
              {rowData[item]}%
            </Blue>
          );
        } else if (item.includes("자산") || item.includes("금액")) {
          return (
            <Name onClick={() => handleRowClick(rowData)}>
              {rowData[item]}원
            </Name>
          );
        } else if (item === "계좌번호") {
          return (
            <AccountContainer>
              <Button>{rowData[item][0]}</Button>
              <Name>
                {`${rowData[item][1].slice(0, 3)}-${rowData[item][1].slice(
                  3,
                  5
                )}-${rowData[item][1].slice(5)}`}
                {` ${rowData[item][2]} `}
              </Name>
            </AccountContainer>
          );
        }

        return (
          <Name onClick={() => handleRowClick(rowData)}>{rowData[item]}</Name>
        );
      },
    };
  });

  const data = { nodes };
  console.log(data);

  return (
    <Style>
      <CompactTable columns={COLUMNS} data={data} />
    </Style>
  );
};
export default Table;
