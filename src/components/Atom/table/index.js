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
    navigate(`/management/${id}`);
  };

  console.log(nodes, "nodes");

  const COLUMNS = header.map((item) => {
    return {
      label: item,
      renderCell: (rowData) => {
        if (item === "이름") {
          console.log(rowData, "rowData");
          item = "nameAndProfile";
          return (
            <NameContainer onClick={() => handleRowClick(rowData)}>
              {/*<Image src={rowData[item][0]} alt="고객 이미지" />*/}
              <Name>{rowData[item][0]}</Name>
            </NameContainer>
          );
        } else if (item === "목표수익률") {
          item = "targetProfitRate";
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
        } else if (item === "현재수익률") {
          item = "currentProfitRate";
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
        } else if (item.includes("자산총액")) {
          item = "currentAsset";
          return (
            <Name onClick={() => handleRowClick(rowData)}>
              {rowData[item]}원
            </Name>
          );
        } else if (item === "계좌번호" || item === "accountNumberAndName") {
          item = "accountNumberAndName";
          return (
            <AccountContainer>
              <Button>종합매매</Button>
              <Name>
                {`${rowData[item][0].slice(0, 3)}-${rowData[item][0].slice(
                  3,
                  5
                )}-${rowData[item][0].slice(5)}`}
                {` ${rowData[item][1]} `}
              </Name>
            </AccountContainer>
          );
        } else if (item === "이메일") {
          item = "email";
          return <Name>{rowData[item]}</Name>;
        } else if (item === "전화번호") {
          item = "phone";
          return <Name>{rowData[item]}</Name>;
        } else if (item === "총자산" || item === "totalAssets") {
          item = "totalAssets";
          return <Name>{rowData[item]}원</Name>;
        } else if (item === "출금가능금액" || item === "withdrawalAmount") {
          item = "withdrawalAmount";

          return <Name>{rowData[item]}</Name>;
        }

        return (
          <Name onClick={() => handleRowClick(rowData)}>{rowData[item]}</Name>
        );
      },
    };
  });

  const data = { nodes };
  return (
    <Style>
      <CompactTable columns={COLUMNS} data={data} />
    </Style>
  );
};
export default Table;
