// Library
import React, { useEffect, useState } from "react";
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import MaterialTable from "material-table";
// import { TableRow } from "@material-ui/core";
import { TableCell } from "@material-ui/core";

const Product = ({ products, columns }) => {
  // const [state, setState] = useState({
  //   columns: [
  //     { title: "Name", field: "name" },
  //     { title: "Price", field: "price" },
  //     { title: "Stars", field: "stars" },
  //     { title: "Category", field: "bsr_category" },
  //     { title: "Brand", field: "brand" }
  //   ]
  // });

  // <TableCell
  //   key={columns.id}
  //   align={columns.align}
  //   onClick={() => handleClick(row.id)}
  // />;

  return (
    <MaterialTable
      columns={[
        { title: "Name", field: "name" },
        { title: "Price", field: "price" },
        { title: "Stars", field: "stars" },
        { title: "Category", field: "bsr_category" },
        { title: "Brand", field: "brand" }
      ]}
      actions={[
        {
          icon: "save",
          tooltip: "Save User",
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        }
      ]}
      title="Products"
      // columns={state.columns}
      data={products}
      className="table"
      // }}
    />
  );
};

export default Product;
