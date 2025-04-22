import * as React from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';
import IconButton from '@mui/material/IconButton';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { TableVirtuoso } from 'react-virtuoso';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import db from '../db.json';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteUser,
    blockUser,
} from '../redux/actions';

const defaultColumns = [
  { width: 20, label: 'ID', dataKey: 'id' },
  { width: 20, label: 'E-mail', dataKey: 'email' },
  { width: 20,  label: 'Role', dataKey: 'role',},
  { width: 20, label: 'Blocked', dataKey: 'isBlocked'},
  { width: 20, label: 'Actions', dataKey: 'actions', sortable: false},
];

const rows = db.users

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

// Sortable & optionally sticky header cell
function SortableHeaderCell({ column, index, isMobile, sortBy, sortDirection, onSort }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: column.dataKey });

  const baseStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: column.width,
    px: 1,
    backgroundColor: 'background.paper',
  };
  const stickyStyle = isMobile && index === 0
    ? { position: 'sticky', left: 0, zIndex: 2, boxShadow: '2px 0 5px -2px rgba(0,0,0,0.2)' }
    : {};

  return (
    <TableCell
      ref={setNodeRef}
      variant="head"
      align={column.numeric ? 'right' : 'left'}
      sortDirection={sortBy === column.dataKey ? sortDirection : false}
      sx={{ ...baseStyle, ...stickyStyle }}
      {...attributes}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {column.sortable !== false ? (
          <TableSortLabel
            active={sortBy === column.dataKey}
            direction={sortBy === column.dataKey ? sortDirection : 'asc'}
            onClick={() => onSort(column.dataKey)}
          >
            {column.label}
          </TableSortLabel>
        ) : (
          column.label
        )}
        {column.sortable !== false && !isMobile && (
        <IconButton {...listeners} size="small">
          <DragIndicatorIcon fontSize="small" />
        </IconButton>
        )
        }
      </div>
    </TableCell>
  );
}

export default function UsersTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const [columns, setColumns] = React.useState(defaultColumns);
  const [sortBy, setSortBy] = React.useState(null);
  const [sortDirection, setSortDirection] = React.useState('asc');

  const handleSort = (columnKey) => {
    if (sortBy === columnKey) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(columnKey);
      setSortDirection('asc');
    }
  };

  const sortedRows = React.useMemo(() => {
    if (!sortBy) return rows;
    return [...rows].sort((a, b) => {
      const diff = a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0;
      return diff * (sortDirection === 'asc' ? 1 : -1);
    });
  }, [sortBy, sortDirection]);

  const sensors = useSensors(useSensor(PointerSensor));
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = columns.findIndex(c => c.dataKey === active.id);
      const newIndex = columns.findIndex(c => c.dataKey === over.id);
      setColumns((cols) => arrayMove(cols, oldIndex, newIndex));
    }
  };

  const fixedHeaderContent = () => (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={columns.map(c => c.dataKey)} strategy={horizontalListSortingStrategy}>
        <TableRow>
          {columns.map((col, idx) => (
            <SortableHeaderCell
              key={col.dataKey}
              column={col}
              index={idx}
              isMobile={isMobile}
              sortBy={sortBy}
              sortDirection={sortDirection}
              onSort={handleSort}
            />
          ))}
        </TableRow>
      </SortableContext>
    </DndContext>
  );

  const rowContent = (_index, row) => (
    <>
      {columns.map((col, idx) => {
        const sx = idx === 0 && isMobile
          ? { position: 'sticky', left: 0, zIndex: 1, backgroundColor: 'background.paper' }
          : {};
  
        if (col.dataKey === 'actions') {
          return (
            <TableCell key="actions" align="center" sx={sx}>
              <IconButton
                size="small"
                onClick={() => dispatch(deleteUser(row.id))}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => dispatch(blockUser(row.id, {isBlocked: !row.isBlocked, role: row.role, email: row.email, password: row.password}))}
              >
                <BlockIcon fontSize="small" />
              </IconButton>
            </TableCell>
          );
        }
        return (
          <TableCell key={col.dataKey} align={col.numeric ? 'right' : 'left'} sx={sx}>
            {row[col.dataKey] === true
              ? 'Yes'
              : row[col.dataKey] === false
              ? 'No'
              : row[col.dataKey]}
          </TableCell>
        );
      })}
    </>
  );

  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <TableVirtuoso
        data={sortedRows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}