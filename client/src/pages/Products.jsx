import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductTable from "../components/ProductTable";
import ProductFormDialog from "../components/ProductFormDialog";
import ProductModifyDialog from "../components/ProductModifyDialog";

export default function Products() {
  return (
    <>
      <div className="flex space-x-5">
        <ProductFormDialog />
        <ProductModifyDialog />
      </div>

      <ProductTable />
    </>
  );
}
