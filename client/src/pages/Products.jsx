import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductTable from "../components/ProductTable";
import ProductFormDialog from "../components/ProductFormDialog";

export default function Products() {
  return (
    <>
      <ProductFormDialog />
      <ProductTable />
    </>
  );
}
