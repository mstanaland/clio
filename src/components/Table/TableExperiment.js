/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useMemo } from "react";
import cx from "classnames";
import {
  useTable,
  useSortBy,
  useFlexLayout,
  useExpanded,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import { AnimatePresence, motion } from "framer-motion";

import Stack from "../Stack";
import Switch from "../Switch";
import { IconButton, GenericButton } from "../Button";
import { IconChevronDown, IconChevronRight } from "../Icons";
import { Row, Column } from "../Grid";
import Text from "../Text";
import Box from "../Box";
import Link from "../Link";
import TextField from "../TextField";
import { SmallIconChevronDown, SmallIconChevronUp } from "../Icons";

import "./TableExperiment.scss";
import { data } from "./data";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <Row>
      <Column width={3}>
        <TextField
          label="Filter"
          isLabelVisible={false}
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`Filter ${count} records ...`}
        />
      </Column>
    </Row>
  );
}

function ExtraDetails({
  description,
  roles,
  isHighPriority,
  createdAt,
  isExpanded,
}) {
  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
        >
          <Box padding="sm" borderRadius="sm">
            <Row>
              <Column>
                <Text size="xs" fontWeight="semibold">
                  Description
                </Text>
                <Text>{description}</Text>
              </Column>
              <Column>
                <Text size="xs" fontWeight="semibold">
                  Roles
                </Text>
                <Text>{roles?.[0]?.name}</Text>
              </Column>
              <Column>
                <Text size="xs" fontWeight="semibold">
                  Priority
                </Text>
                <Text>{isHighPriority ? "High" : "Standard"}</Text>
              </Column>
              <Column>
                <Text size="xs" fontWeight="semibold">
                  Date Created
                </Text>
                <Text>{createdAt}</Text>
              </Column>
            </Row>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function TableExperiment() {
  const columns = useMemo(() => {
    return [
      {
        Header: "",
        id: "expander",
        className: "expander-td",
        width: 32,
        Cell: ({ row }) => {
          const { onClick, ...rest } = row.getToggleRowExpandedProps();
          return (
            <IconButton
              aria-expanded={row.isExpanded}
              aria-label={row.isExpanded ? "Collapse row" : "Expand row"}
              size="sm"
              appearance="subtle"
              onPress={onClick}
              {...rest}
              iconElement={
                row.isExpanded ? <IconChevronDown /> : <IconChevronRight />
              }
            />
          );
        },
      },
      {
        Header: "Key ID",
        accessor: "prefix",
        width: 150,
        Cell: ({ row }) => (
          <span className="text-xs font-mono">{row.original.prefix}</span>
        ),
      },
      {
        Header: "User",
        accessor: (row) => `${row.user.firstName} ${row.user.lastName}`,
        Cell: ({ row }) => (
          <Link to="/user">{`${row.original.user.firstName} ${row.original.user.lastName}`}</Link>
        ),
        id: "user",
      },
      {
        Header: "Last used",
        accessor: "lastActiveDateTime",
        Cell: ({ row }) => {
          if (!Boolean(row.original.lastActiveDateTime)) {
            return <Text color="gray">Never used</Text>;
          }

          return row.original.lastActiveDateTime;
        },
      },
      {
        Header: "Jobs run",
        accessor: "submittedJobs",
        id: "submittedJobs",
      },
      {
        Header: "Active",
        id: "active",
        accessor: "status",
        width: 32,
        Cell: ({ row }) => {
          return (
            <Switch size="sm" isChecked={row?.original?.status === "active"} />
          );
        },
      },
      {
        Header: () => null,
        id: "details",
        width: "100%",
        className: "details-extra",
        Cell: ({ row }) => {
          return <ExtraDetails {...row.original} isExpanded={row.isExpanded} />;
        },
      },
    ];
  }, []);

  const initialState = useMemo(
    () => ({
      sortBy: [{ id: "submittedJobs", desc: true }],
    }),
    []
  );

  const tableInstance = useTable(
    { columns, data, initialState },
    useFlexLayout,
    useGlobalFilter,
    useSortBy,
    useExpanded
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  } = tableInstance;

  return (
    <Stack>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table data-table-experiment {...getTableProps()} className="text-md">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                const contents = column.render("Header");

                return (
                  <th
                    {...column.getHeaderProps({
                      className: column.className,
                    })}
                  >
                    {contents ? (
                      <GenericButton
                        className="table-th-toggle-button"
                        {...column.getSortByToggleProps()}
                        title={null}
                        aria-label={`Sort table by ${contents}`}
                      >
                        <div>
                          {contents}
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <SmallIconChevronDown width="16" height="16" />
                            ) : (
                              <SmallIconChevronUp width="16" height="16" />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </GenericButton>
                    ) : (
                      <span aria-hidden="true" />
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={cx({
                  expanded: row.isExpanded,
                  "shadow-md": row.isExpanded,
                })}
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps({
                        className: cell.column.className,
                      })}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Stack>
  );
}

// export default function TableExperiment() {
//   const [show, setShow] = useState(false);

//   return (
//     <table data-table-experiment role="grid">
//       <thead role="rowgroup">
//         <tr role="row">
//           <th role="columnheader">Key ID</th>
//           <th role="columnheader">User</th>
//           <th role="columnheader">Last used</th>
//           <th role="columnheader">Jobs submitted</th>
//           <th role="columnheader">Key active</th>
//           <th role="columnheader" aria-hidden>
//             &nbsp;
//           </th>
//           <th role="columnheader" className="sr-only">
//             Details
//           </th>
//         </tr>
//       </thead>
//       <tbody role="rowgroup">
//         <tr role="row">
//           <th scope="row" role="rowheader">
//             P61Hbmu3...
//           </th>
//           <td role="gridcell">Ellie Ray</td>
//           <td role="gridcell">Oct 2, 2020</td>
//           <td role="gridcell">73</td>
//           <td role="gridcell">Active</td>
//           <td role="gridcell" aria-hidden>
//             <button onClick={() => setShow((prev) => !prev)}>
//               {show ? "Hide details" : "Show details"}
//             </button>
//           </td>
//           <td
//             className={cx("details", {
//               visible: show,
//             })}
//             role="gridcell"
//           >
//             <div
//               className="p-sm"
//               style={{ background: "var(--color-background-3" }}
//             >
//               These are the details, sucka! There's a lot of details but you
//               probably don't care about any of this stuff
//             </div>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }
