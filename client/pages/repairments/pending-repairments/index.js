import React from "react";
import CollapsibleList from "../../../components/CollapsibleList";
import ListItem from "../../../components/CollapsibleList/ListItem";
import Layout from "../../../components/Layout";

import { format } from "date-fns";

import styles from "./list.module.scss";
import FilterBar from "../../../components/CollapsibleList/FilterBar";
import globalHook from "../../../hooks/global.hook";
import { useRouter } from "next/router";

export default function PendingRepairments({ data }) {
  const { useGlobalState } = globalHook();
  const { user } = useGlobalState();

  const router = useRouter();
  console.log(user);
  const columns = [
    "ID",
    "Start Date",
    "Status",
    "Device",
    "Customer",
    "Employee",
    "Remark",
  ];
  const columnSizes = [0.5, 1.7, 1.2, 1.8, 1.5, 1.5, 3];

  const assign = (repairmentID) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/repairments/updateEmployee`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ employeeID: user.ID, repairmentID }),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(response);
        if (!response.ok) {
          const error = (data && data.error) || response.status;
          throw new Error(data.error);
        }
        if (response.ok && data) {
          console.log(data);
          router.push("/repairments/pending-repairments");
        }
      })
      .catch((e) => {
        console.log(e.toString());
      });
  };
  console.log(data);
  return (
    <Layout title="Pending Repairments">
      <FilterBar size={data?.length || 0} />
      <CollapsibleList
        size={data?.length || 0}
        columns={columns}
        columnSizes={columnSizes}
      >
        {data.map((item) => {
          return (
            <ListItem sizes={columnSizes} key={item.ID}>
              <ListItem.Columns>
                <ListItem.Item isId>{item.ID}</ListItem.Item>
                <ListItem.Item>
                  {format(
                    new Date(item.repairmentStartDate),
                    "dd-MM-yyyy HH:mm"
                  )}
                </ListItem.Item>
                <ListItem.Item>
                  {item.repairmentEndDate ? "Completed" : "Pending"}
                </ListItem.Item>
                <ListItem.Item>{item.device.deviceID}</ListItem.Item>
                <ListItem.Item>
                  {item.customer.firstName} {item.customer.lastName}
                </ListItem.Item>
                <ListItem.Item>
                  {item.employee.EmpfirstName} {item.employee.EmplastName}
                </ListItem.Item>
                <ListItem.Item>{item.remark}</ListItem.Item>
              </ListItem.Columns>
              <ListItem.Content>
                <>
                  <div className={styles.contentContainer}>
                    <div className={styles.content}>
                      <ListItem.ContentHeader text="Repairment Details" />
                      <p>
                        <span>ID:</span>
                        {item.ID}
                      </p>
                      <p>
                        <span>Repairment Start:</span>
                        {format(
                          new Date(item.repairmentStartDate),
                          "dd-MM-yyyy HH:mm"
                        )}
                      </p>
                      <p>
                        <span>Repairment End:</span>
                        {item.repairmentEndDate || "-"}
                      </p>
                      <p>
                        <span>Is Part Waited:</span>
                        {item.isPartWaited ? "Yes" : "No"}
                      </p>
                      <p>
                        <span>Is In Warranty:</span>
                        {item.isInWarranty ? "Yes" : "No"}
                      </p>
                      <p>
                        <span>Remark:</span>
                        {item.remark}
                      </p>
                      <p>
                        <span>Repairment Duration:</span>
                        {item.repairmentDuration}
                      </p>
                      <p>
                        <span>Case Type:</span>
                        {item.case.caseType}
                      </p>
                      <p>
                        <span>Case Category:</span>
                        {item.case.caseCategory}
                      </p>
                      <p>
                        <span>Case Specification:</span>
                        {item.case.caseSpecification}
                      </p>
                      <p>
                        <span>Case Description:</span>
                        {item.case.caseDescription}
                      </p>
                    </div>
                    <div className={styles.content}>
                      <ListItem.ContentHeader text="Device Details" />
                      <p>
                        <span>Device ID:</span>
                        {item.device.deviceID}
                      </p>
                      <p>
                        <span>Model:</span>
                        {item.device.model}
                      </p>
                      <p>
                        <span>Color Code:</span>
                        {item.device.colorCode}
                      </p>
                      <p>
                        <span>Serial Code:</span>
                        {item.device.serialCode}
                      </p>
                      <p>
                        <span>Warranty Due Date:</span>
                        {format(
                          new Date(item.device.warrantyDueDate),
                          "dd-MM-yyyy HH:mm"
                        )}
                      </p>
                      <p>
                        <span>Has Warranty:</span>
                        {item.device.warranty == 1 ? "Yes" : "No"}
                      </p>
                      <p>
                        <span>Physical Condition:</span>
                        {item.device.physicalCondition}
                      </p>
                      <p>
                        <span>Proof Of Purchase:</span>
                        {item.device.proofOfPurchase ? "Yes" : "No"}
                      </p>
                    </div>
                    <div className={styles.content}>
                      <ListItem.ContentHeader text="Customer Details" />
                      <p>
                        <span>Customer ID:</span>
                        {item.customer.customerID}
                      </p>
                      <p>
                        <span>Name:</span>
                        {item.customer.firstName}
                      </p>
                      <p>
                        <span>Surname:</span>
                        {item.customer.lastName}
                      </p>
                    </div>
                    <div className={styles.content}>
                      <ListItem.ContentHeader text="Employee Details" />
                      <p>
                        <span>Employee ID:</span>
                        {item.employee.employeeID}
                      </p>
                      <p>
                        <span>Name:</span>
                        {item.employee.EmpfirstName}
                      </p>
                      <p>
                        <span>Surname:</span>
                        {item.employee.EmplastName}
                      </p>
                    </div>
                  </div>
                  <button
                    className={styles.button}
                    onClick={() => assign(item.ID)}
                  >
                    Take Assignment
                  </button>
                </>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </CollapsibleList>
    </Layout>
  );
}

PendingRepairments.getInitialProps = async function ({ query }) {
  let data = {};
  let error = {};

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/getPendingRepairments`
  );
  const json = await res.json();
  return { data: json.pendingRepairments };
};
